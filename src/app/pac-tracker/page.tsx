// src/app/pac-tracker/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

const LINKS = {
  home: "/",
  x: "https://x.com/al33xf",
  gh: "https://github.com/al3xf3r",
};

const TRACKER_PASSWORD = "al33";

type AssetType = "ETF" | "Crypto";

type PortfolioAsset = {
  id: string;
  name: string;
  symbol: string;
  type: AssetType;
  monthly_amount: number;
  current_price: number;
  market_symbol: string | null;
  total_invested: number;
  total_quantity: number;
  current_value: number;
  pnl: number;
  pnl_percent: number;
  avg_buy_price: number;
  value_allocation: number;
  invested_allocation: number;
  transactions_count: number;
  last_transaction_date: string | null;
};

type PortfolioSummary = {
  total_invested: number;
  current_value: number;
  pnl: number;
  pnl_percent: number;
};

type PacTransaction = {
  asset_id: string;
  execution_date: string;
  amount_eur: number;
  price_eur: number;
  quantity: number;
};

type PortfolioResponse = {
  success: boolean;
  summary: PortfolioSummary;
  assets: PortfolioAsset[];
  transactions: PacTransaction[];
};

const ASSET_COLORS: Record<string, string> = {
  "msci-world": "#4f8fff",
  "nasdaq-100": "#2e6cff",
  "emerging-markets": "#22c55e",
  "small-cap": "#a855f7",
  semiconductor: "#ff6a00",
  bitcoin: "#f59e0b",
  ethereum: "#8b5cf6",
  ondo: "#10b981",
  morpho: "#ec4899",
  pyth: "#14b8a6",
};

function formatEUR(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number, decimals = 4) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
  }).format(value);
}

function formatDate(value: string | null) {
  if (!value) return "—";

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getNextPacDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const thisMonthPac = new Date(year, month, 2);

  if (now <= thisMonthPac) return thisMonthPac;

  return new Date(year, month + 1, 2);
}

function daysUntil(date: Date) {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
}

function generateProjection(monthlyAmount: number, annualReturn: number, years: number) {
  const monthlyRate = annualReturn / 12;
  const months = years * 12;
  let value = 0;

  for (let i = 0; i < months; i++) {
    value = value * (1 + monthlyRate) + monthlyAmount;
  }

  return value;
}

export default function PacTrackerPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);
  const [transactions, setTransactions] = useState<PacTransaction[]>([]);
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const year = useMemo(() => new Date().getFullYear(), []);
  const nextPacDate = useMemo(() => getNextPacDate(), []);
  const daysToNextPac = useMemo(() => daysUntil(nextPacDate), [nextPacDate]);

  async function loadPortfolio() {
    try {
      await fetch("/api/pac/refresh-crypto", { cache: "no-store" });
      await fetch("/api/pac/refresh-etf", { cache: "no-store" });

      const response = await fetch("/api/pac/portfolio", {
        cache: "no-store",
      });

      const data: PortfolioResponse = await response.json();

      const sortedAssets = [...(data.assets || [])].sort(
        (a, b) => Number(b.monthly_amount) - Number(a.monthly_amount)
      );

      setAssets(sortedAssets);
      setTransactions(data.transactions || []);
      setSummary(data.summary);
      setLastUpdate(new Date());
    } catch (error) {
      console.error("Failed to load portfolio:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!unlocked) return;

    loadPortfolio();

    const interval = setInterval(() => {
      loadPortfolio();
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, [unlocked]);

  const monthlyTotal = assets.reduce(
    (sum, asset) => sum + Number(asset.monthly_amount),
    0
  );

  const etfMonthly = assets
    .filter((asset) => asset.type === "ETF")
    .reduce((sum, asset) => sum + Number(asset.monthly_amount), 0);

  const cryptoMonthly = assets
    .filter((asset) => asset.type === "Crypto")
    .reduce((sum, asset) => sum + Number(asset.monthly_amount), 0);

  const totalInvested = summary?.total_invested ?? 0;
  const currentValue = summary?.current_value ?? 0;
  const totalPnL = summary?.pnl ?? 0;
  const totalPnLPercent = summary?.pnl_percent ?? 0;

  const projection10yConservative = generateProjection(monthlyTotal, 0.07, 10);
  const projection10yRealistic = generateProjection(monthlyTotal, 0.12, 10);
  const projection10yBullish = generateProjection(monthlyTotal, 0.18, 10);

  const bestPerformer = [...assets].sort((a, b) => b.pnl_percent - a.pnl_percent)[0];
  const worstPerformer = [...assets].sort((a, b) => a.pnl_percent - b.pnl_percent)[0];

  const allocationGradient = useMemo(() => {
    if (!assets.length || currentValue <= 0) {
      return "conic-gradient(rgba(255,255,255,0.08) 0deg 360deg)";
    }

    let start = 0;

    const parts = assets.map((asset) => {
      const color = ASSET_COLORS[asset.id] || "#ffffff";
      const slice = (asset.current_value / currentValue) * 360;
      const end = start + slice;
      const part = `${color} ${start}deg ${end}deg`;
      start = end;
      return part;
    });

    return `conic-gradient(${parts.join(", ")})`;
  }, [assets, currentValue]);

  const portfolioChart = useMemo(() => {
    const grouped = new Map<string, { invested: number; value: number }>();

    for (const tx of transactions) {
      const existing = grouped.get(tx.execution_date) || { invested: 0, value: 0 };
      const asset = assets.find((item) => item.id === tx.asset_id);
      const currentPrice = Number(asset?.current_price || tx.price_eur);

      grouped.set(tx.execution_date, {
        invested: existing.invested + Number(tx.amount_eur),
        value: existing.value + Number(tx.quantity) * currentPrice,
      });
    }

    let cumulativeInvested = 0;
    let cumulativeValue = 0;

    return Array.from(grouped.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, values]) => {
        cumulativeInvested += values.invested;
        cumulativeValue += values.value;

        return {
          date,
          invested: cumulativeInvested,
          value: cumulativeValue,
        };
      });
  }, [transactions, assets]);

  const maxPortfolioChartValue = Math.max(
    ...portfolioChart.flatMap((point) => [point.invested, point.value]),
    1
  );

  function handleUnlock() {
    if (password === TRACKER_PASSWORD) {
      setUnlocked(true);
    }
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-white antialiased flex items-center justify-center px-4">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black to-black" />
        </div>

        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(46,108,255,0.18)]">
          <div className="flex items-center gap-3">
            <img
              src="/assets/al33xf.webp"
              alt="al33xf"
              className="h-10 w-10 rounded-xl border border-white/10 bg-black/40 object-cover"
            />
            <div>
              <div className="font-extrabold">
                al<span className="text-[#ff6a00]">33</span>xf
              </div>
              <div className="text-xs text-white/50">Private PAC Tracker</div>
            </div>
          </div>

          <h1 className="mt-8 text-3xl font-extrabold tracking-tight">
            Personal portfolio access
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            This dashboard contains private investment data.
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUnlock();
            }}
            placeholder="Password"
            className="mt-6 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#ff6a00]/60"
          />

          <button
            onClick={handleUnlock}
            className="mt-4 w-full rounded-2xl bg-[#ff6a00] px-5 py-3 font-semibold text-black hover:bg-[#ff8a2e]"
          >
            Unlock tracker
          </button>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-sm text-white/50">Loading portfolio...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black to-black" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href={LINKS.home} className="flex items-center gap-3">
            <img
              src="/assets/al33xf.webp"
              alt="al33xf"
              className="h-9 w-9 rounded-xl border border-white/10 bg-black/40 object-cover"
            />
            <div>
              <div className="text-lg font-extrabold leading-none tracking-tight">
                al<span className="text-[#ff6a00]">33</span>xf
              </div>
              <div className="-mt-0.5 text-[11px] text-white/55">
                PAC Tracker
              </div>
            </div>
          </a>

          <button
            onClick={loadPortfolio}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Refresh
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-10">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
            Live portfolio • Auto-refresh every 5 minutes
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            PAC Tracker
            <span className="block bg-gradient-to-r from-[#4f8fff] via-white to-[#ff8a2e] bg-clip-text text-transparent">
              Real portfolio dashboard.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/65">
            Real accumulation data from Supabase transactions, live crypto
            prices and tracked ETF values.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            <MetricCard label="Monthly PAC" value={formatEUR(monthlyTotal)} sub="planned deposit" />
            <MetricCard label="Invested" value={formatEUR(totalInvested)} sub="real capital" />
            <MetricCard label="Value" value={formatEUR(currentValue)} sub="current portfolio" />
            <MetricCard
              label="P/L"
              value={`${totalPnL >= 0 ? "+" : ""}${formatEUR(totalPnL)}`}
              sub={`${totalPnLPercent >= 0 ? "+" : ""}${totalPnLPercent.toFixed(2)}%`}
              positive={totalPnL >= 0}
            />
          </div>

          <div className="mt-4 text-xs text-white/40">
            Last update:{" "}
            {lastUpdate
              ? lastUpdate.toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "not available"}{" "}
            • Next PAC:{" "}
            {nextPacDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <ProjectionCard label="Conservative" value={formatEUR(projection10yConservative)} sub="10 years • 7% yearly" />
          <ProjectionCard label="Realistic tech" value={formatEUR(projection10yRealistic)} sub="10 years • 12% yearly" />
          <ProjectionCard label="Bullish" value={formatEUR(projection10yBullish)} sub="10 years • 18% yearly" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
  <div className="flex items-end justify-between gap-4">
    <div>
      <div className="text-sm text-white/50">Real performance</div>
      <h2 className="mt-1 text-2xl font-extrabold">
        Invested vs current value
      </h2>
    </div>
    <div className="text-right text-sm text-white/50">
      Based on PAC transactions
    </div>
  </div>

  <div className="mt-6 flex h-52 flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 text-center">
    <div className="text-lg font-bold text-white/85">
      Waiting for more PAC cycles
    </div>

    <div className="mt-2 max-w-sm text-sm leading-relaxed text-white/45">
      The real performance chart will become meaningful after at least two monthly executions.
      Your next automatic PAC is scheduled for Jun 2, 2026.
    </div>
  </div>

  <div className="mt-4 flex items-center gap-4 text-xs text-white/50">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-white/20" />
      Invested
    </div>
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
      Current value
    </div>
  </div>
</div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/50">Allocation</div>
            <h2 className="mt-1 text-2xl font-extrabold">Portfolio split</h2>

            <div className="mt-6 flex justify-center">
              <div
                className="h-44 w-44 rounded-full border border-white/10"
                style={{ background: allocationGradient }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/10 bg-black">
                    <div className="text-xs text-white/45">Value</div>
                    <div className="text-sm font-bold">{formatEUR(currentValue)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {assets.slice(0, 5).map((asset) => (
                <div key={asset.id} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: ASSET_COLORS[asset.id] || "#ffffff" }}
                    />
                    <span className="truncate text-white/70">{asset.symbol}</span>
                  </div>
                  <span className="font-semibold">{asset.value_allocation.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          <InsightCard
            label="Best performer"
            value={bestPerformer ? bestPerformer.symbol : "—"}
            sub={bestPerformer ? `${bestPerformer.pnl_percent.toFixed(2)}%` : "No data"}
            positive
          />
          <InsightCard
            label="Worst performer"
            value={worstPerformer ? worstPerformer.symbol : "—"}
            sub={worstPerformer ? `${worstPerformer.pnl_percent.toFixed(2)}%` : "No data"}
            positive={worstPerformer ? worstPerformer.pnl >= 0 : undefined}
          />
          <InsightCard
            label="Next buy"
            value={`${daysToNextPac} days`}
            sub={nextPacDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
          <InsightCard
            label="Transactions"
            value={String(transactions.length)}
            sub="total PAC entries"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
  <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="text-sm text-white/50">Portfolio allocation</div>
        <h2 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">
          ETF vs Crypto split
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
          Allocation is calculated dynamically from the current monthly PAC configuration and live portfolio value.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:min-w-[320px]">
        <MetricCard
          label="ETF monthly"
          value={formatEUR(etfMonthly)}
          sub={`${monthlyTotal > 0 ? ((etfMonthly / monthlyTotal) * 100).toFixed(1) : "0.0"}% of PAC`}
        />

        <MetricCard
          label="Crypto monthly"
          value={formatEUR(cryptoMonthly)}
          sub={`${monthlyTotal > 0 ? ((cryptoMonthly / monthlyTotal) * 100).toFixed(1) : "0.0"}% of PAC`}
        />
      </div>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
        <div className="flex justify-center">
          <div
            className="relative h-52 w-52 rounded-full border border-white/10 shadow-[0_0_50px_rgba(46,108,255,0.15)]"
            style={{ background: allocationGradient }}
          >
            <div className="absolute inset-8 rounded-full border border-white/10 bg-black/90 flex flex-col items-center justify-center">
              <div className="text-xs text-white/45">Portfolio</div>
              <div className="mt-1 text-xl font-extrabold">
                {formatEUR(currentValue)}
              </div>
              <div className="mt-1 text-xs text-white/40">
                {totalPnL >= 0 ? "+" : ""}
                {totalPnLPercent.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/45">ETF plan</div>
            <div className="mt-1 text-lg font-extrabold">
              {monthlyTotal > 0 ? ((etfMonthly / monthlyTotal) * 100).toFixed(1) : "0.0"}%
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/45">Crypto plan</div>
            <div className="mt-1 text-lg font-extrabold">
              {monthlyTotal > 0 ? ((cryptoMonthly / monthlyTotal) * 100).toFixed(1) : "0.0"}%
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-white/50">Asset weights</div>
            <h3 className="mt-1 text-xl font-extrabold">Live allocation</h3>
          </div>
          <div className="text-right text-xs text-white/40">
            Based on current value
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {assets.map((asset) => (
            <div key={asset.id}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: ASSET_COLORS[asset.id] || "#ffffff" }}
                  />
                  <span className="truncate font-semibold">{asset.symbol}</span>
                  <span className="hidden text-white/35 sm:inline">
                    {asset.type}
                  </span>
                </div>

                <div className="text-right">
                  <div className="font-bold">
                    {asset.value_allocation.toFixed(1)}%
                  </div>
                  <div className="text-xs text-white/35">
                    {formatEUR(asset.current_value)}
                  </div>
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.min(asset.value_allocation, 100)}%`,
                    backgroundColor: ASSET_COLORS[asset.id] || "#ffffff",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <div className="border-b border-white/10 p-6 md:p-8">
            <div className="text-sm text-white/60">Assets</div>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
              Portfolio details
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Quantities, average buy price, invested capital and P/L are calculated from real PAC transactions.
            </p>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {assets.map((asset) => (
              <MobileAssetCard key={asset.id} asset={asset} />
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1100px] text-sm">
              <thead className="bg-black/30 text-white/50">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Asset</th>
                  <th className="px-6 py-4 text-left font-medium">Type</th>
                  <th className="px-6 py-4 text-right font-medium">Monthly</th>
                  <th className="px-6 py-4 text-right font-medium">Invested</th>
                  <th className="px-6 py-4 text-right font-medium">Value</th>
                  <th className="px-6 py-4 text-right font-medium">Avg buy</th>
                  <th className="px-6 py-4 text-right font-medium">Price</th>
                  <th className="px-6 py-4 text-right font-medium">Quantity</th>
                  <th className="px-6 py-4 text-right font-medium">Weight</th>
                  <th className="px-6 py-4 text-right font-medium">P/L</th>
                </tr>
              </thead>

              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="border-t border-white/10 hover:bg-white/[0.03]">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{asset.name}</div>
                      <div className="text-xs text-white/45">{asset.symbol}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        {asset.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      {formatEUR(asset.monthly_amount)}
                    </td>
                    <td className="px-6 py-4 text-right text-white/70">
                      {formatEUR(asset.total_invested)}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      {formatEUR(asset.current_value)}
                    </td>
                    <td className="px-6 py-4 text-right text-white/70">
                      {formatEUR(asset.avg_buy_price)}
                    </td>
                    <td className="px-6 py-4 text-right text-white/70">
                      {formatEUR(asset.current_price)}
                    </td>
                    <td className="px-6 py-4 text-right text-white/70">
                      {formatNumber(asset.total_quantity, asset.type === "Crypto" ? 8 : 5)}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      {asset.value_allocation.toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      <span className={asset.pnl >= 0 ? "text-emerald-400" : "text-red-400"}>
                        {asset.pnl >= 0 ? "+" : ""}
                        {formatEUR(asset.pnl)} ({asset.pnl_percent.toFixed(2)}%)
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
          <div className="text-sm text-white/50">PAC calendar</div>
          <h2 className="mt-1 text-2xl font-extrabold">Execution timeline</h2>

          <div className="mt-6 space-y-3">
            {transactions
              .slice()
              .sort((a, b) => b.execution_date.localeCompare(a.execution_date))
              .slice(0, 8)
              .map((tx, index) => {
                const asset = assets.find((item) => item.id === tx.asset_id);

                return (
                  <div
                    key={`${tx.asset_id}-${tx.execution_date}-${index}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div>
                      <div className="font-semibold">{asset?.symbol || tx.asset_id}</div>
                      <div className="mt-1 text-xs text-white/45">
                        {formatDate(tx.execution_date)} • {formatNumber(Number(tx.quantity), asset?.type === "Crypto" ? 8 : 5)} units
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{formatEUR(Number(tx.amount_eur))}</div>
                      <div className="mt-1 text-xs text-white/45">
                        @ {formatEUR(Number(tx.price_eur))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-10 md:flex-row md:items-center">
          <div className="text-sm text-white/60">
            © {year} al33xf. Personal PAC Tracker.
          </div>

          <div className="flex gap-4 text-sm text-white/60">
            <a href={LINKS.home} className="hover:text-white">Home</a>
            <a href={LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href={LINKS.gh} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MetricCard({
  label,
  value,
  sub,
  positive,
}: {
  label: string;
  value: string;
  sub: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div
        className={`mt-1 text-lg font-extrabold tracking-tight ${
          positive === undefined ? "text-white" : positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-white/45">{sub}</div>
    </div>
  );
}

function ProjectionCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-2 text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs text-white/40">{sub}</div>
    </div>
  );
}

function InsightCard({
  label,
  value,
  sub,
  positive,
}: {
  label: string;
  value: string;
  sub: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
      <div className="text-xs text-white/50">{label}</div>
      <div
        className={`mt-2 text-xl font-extrabold ${
          positive === undefined ? "text-white" : positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-white/40">{sub}</div>
    </div>
  );
}

function MobileAssetCard({ asset }: { asset: PortfolioAsset }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{asset.name}</div>
          <div className="mt-1 text-xs text-white/45">
            {asset.symbol} • {asset.type}
          </div>
        </div>

        <div className="text-right">
          <div className="font-extrabold">{asset.value_allocation.toFixed(1)}%</div>
          <div className="text-xs text-white/45">weight</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <MiniData label="Monthly" value={formatEUR(asset.monthly_amount)} />
        <MiniData label="Invested" value={formatEUR(asset.total_invested)} />
        <MiniData label="Value" value={formatEUR(asset.current_value)} />
        <MiniData label="Avg buy" value={formatEUR(asset.avg_buy_price)} />
        <MiniData label="Price" value={formatEUR(asset.current_price)} />
        <MiniData label="Quantity" value={formatNumber(asset.total_quantity, asset.type === "Crypto" ? 8 : 5)} />
        <MiniData label="Last buy" value={formatDate(asset.last_transaction_date)} />
        <MiniData
          label="P/L"
          value={`${asset.pnl >= 0 ? "+" : ""}${formatEUR(asset.pnl)}`}
          positive={asset.pnl >= 0}
        />
      </div>
    </div>
  );
}

function MiniData({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/45">{label}</div>
      <div
        className={`mt-1 text-sm font-semibold ${
          positive === undefined ? "text-white" : positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {value}
      </div>
    </div>
  );
}