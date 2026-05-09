// src/app/api/pac/refresh-etf/route.ts

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

async function fetchYahooPrice(symbol: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
    symbol
  )}?interval=1d&range=1d`;

  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Yahoo request failed for ${symbol}`);
  }

  const data = await response.json();

  const result = data?.chart?.result?.[0];
  const meta = result?.meta;

  const price =
    meta?.regularMarketPrice ??
    meta?.previousClose ??
    result?.indicators?.quote?.[0]?.close?.at(-1);

  if (!price || Number.isNaN(Number(price))) {
    throw new Error(`No valid price found for ${symbol}`);
  }

  return Number(price);
}

export async function GET() {
  try {
    const { data: etfAssets, error } = await supabaseAdmin
      .from("assets")
      .select("*")
      .eq("type", "ETF")
      .eq("is_active", true);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const updates = [];

    for (const asset of etfAssets || []) {
      if (!asset.market_symbol) continue;

      try {
        const price = await fetchYahooPrice(asset.market_symbol);

        await supabaseAdmin
          .from("assets")
          .update({
            current_price: price,
            updated_at: new Date().toISOString(),
          })
          .eq("id", asset.id);

        await supabaseAdmin.from("prices").insert({
          asset_id: asset.id,
          price_eur: price,
          source: "yahoo",
        });

        updates.push({
          asset: asset.symbol,
          market_symbol: asset.market_symbol,
          price,
        });
      } catch (assetError) {
        updates.push({
          asset: asset.symbol,
          market_symbol: asset.market_symbol,
          error:
            assetError instanceof Error
              ? assetError.message
              : "Unknown ETF refresh error",
        });
      }
    }

    return NextResponse.json({
      success: true,
      updated: updates,
    });
  } catch (error) {
    console.error("ETF refresh error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}