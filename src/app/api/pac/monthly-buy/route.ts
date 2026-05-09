// src/app/api/pac/monthly-buy/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret) {
      return NextResponse.json(
        { error: "Missing CRON_SECRET" },
        { status: 500 }
      );
    }

    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const today = new Date();
    const executionDate = today.toISOString().slice(0, 10);

    const { data: assets, error: assetsError } = await supabaseAdmin
      .from("assets")
      .select("*")
      .eq("is_active", true);

    if (assetsError) {
      return NextResponse.json(
        { error: assetsError.message },
        { status: 500 }
      );
    }

    const transactions = [];

    for (const asset of assets || []) {
      const amountEur = Number(asset.monthly_amount);
      const priceEur = Number(asset.current_price);

      if (!amountEur || !priceEur || priceEur <= 0) {
        continue;
      }

      const quantity = amountEur / priceEur;

      transactions.push({
        asset_id: asset.id,
        execution_date: executionDate,
        amount_eur: amountEur,
        price_eur: priceEur,
        quantity,
        source: "cron",
      });
    }

    const { data, error: insertError } = await supabaseAdmin
      .from("pac_transactions")
      .upsert(transactions, {
        onConflict: "asset_id,execution_date",
      })
      .select();

    if (insertError) {
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      execution_date: executionDate,
      inserted: data?.length ?? 0,
      transactions: data,
    });
  } catch (error) {
    console.error("Monthly PAC buy error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}