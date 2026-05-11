// src/app/api/pac/portfolio/route.ts

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

type AssetRow = {
  id: string;
  name: string;
  symbol: string;
  type: "ETF" | "Crypto";
  monthly_amount: number;
  current_price: number;
  source: string;
  coingecko_id: string | null;
  market_symbol: string | null;
  is_active: boolean;
};

type TransactionRow = {
  asset_id: string;
  execution_date: string;
  amount_eur: number;
  price_eur: number;
  quantity: number;
};

export async function GET() {
  try {
    const { data: assets, error: assetsError } = await supabaseAdmin
      .from("assets")
      .select("*")
      .eq("is_active", true);

    if (assetsError) {
      return NextResponse.json({ error: assetsError.message }, { status: 500 });
    }

    const { data: transactions, error: txError } = await supabaseAdmin
      .from("pac_transactions")
      .select("asset_id, execution_date, amount_eur, price_eur, quantity")
      .order("execution_date", { ascending: true });

    if (txError) {
      return NextResponse.json({ error: txError.message }, { status: 500 });
    }

    const safeAssets = (assets || []) as AssetRow[];
    const safeTransactions = (transactions || []) as TransactionRow[];

    const portfolioBase = safeAssets.map((asset) => {
      const assetTransactions = safeTransactions.filter(
        (tx) => tx.asset_id === asset.id
      );

      const totalInvested = assetTransactions.reduce(
        (sum, tx) => sum + Number(tx.amount_eur),
        0
      );

      const totalQuantity = assetTransactions.reduce(
        (sum, tx) => sum + Number(tx.quantity),
        0
      );

      const currentPrice = Number(asset.current_price);
      const currentValue = totalQuantity * currentPrice;
      const pnl = currentValue - totalInvested;
      const pnlPercent = totalInvested > 0 ? (pnl / totalInvested) * 100 : 0;
      const avgBuyPrice = totalQuantity > 0 ? totalInvested / totalQuantity : 0;

      const lastTransaction = assetTransactions.at(-1) || null;

      return {
        ...asset,
        total_invested: totalInvested,
        total_quantity: totalQuantity,
        current_value: currentValue,
        pnl,
        pnl_percent: pnlPercent,
        avg_buy_price: avgBuyPrice,
        transactions_count: assetTransactions.length,
        last_transaction_date: lastTransaction?.execution_date ?? null,
      };
    });

    const totalInvested = portfolioBase.reduce(
      (sum, asset) => sum + asset.total_invested,
      0
    );

    const currentValue = portfolioBase.reduce(
      (sum, asset) => sum + asset.current_value,
      0
    );

    const totalPnL = currentValue - totalInvested;
    const totalPnLPercent =
      totalInvested > 0 ? (totalPnL / totalInvested) * 100 : 0;

    const portfolio = portfolioBase.map((asset) => ({
      ...asset,
      value_allocation:
        currentValue > 0 ? (asset.current_value / currentValue) * 100 : 0,
      invested_allocation:
        totalInvested > 0 ? (asset.total_invested / totalInvested) * 100 : 0,
    }));

    return NextResponse.json({
      success: true,
      summary: {
        total_invested: totalInvested,
        current_value: currentValue,
        pnl: totalPnL,
        pnl_percent: totalPnLPercent,
      },
      assets: portfolio,
      transactions: safeTransactions,
    });
  } catch (error) {
    console.error("Portfolio API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}