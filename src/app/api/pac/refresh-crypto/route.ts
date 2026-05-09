// src/app/api/pac/refresh-crypto/route.ts

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function GET() {
  try {
    const { data: cryptoAssets, error } = await supabaseAdmin
      .from("assets")
      .select("*")
      .eq("type", "Crypto")
      .eq("is_active", true);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const ids = cryptoAssets
      .map((asset) => asset.coingecko_id)
      .filter(Boolean)
      .join(",");

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=eur`,
      {
        next: { revalidate: 0 },
      }
    );

    const prices = await response.json();

    const updates = [];

    for (const asset of cryptoAssets) {
      const price =
        prices?.[asset.coingecko_id]?.eur;

      if (!price) continue;

      await supabaseAdmin
        .from("assets")
        .update({
          current_price: price,
          updated_at: new Date().toISOString(),
        })
        .eq("id", asset.id);

      await supabaseAdmin
        .from("prices")
        .insert({
          asset_id: asset.id,
          price_eur: price,
          source: "coingecko",
        });

      updates.push({
        asset: asset.symbol,
        price,
      });
    }

    return NextResponse.json({
      success: true,
      updated: updates,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}