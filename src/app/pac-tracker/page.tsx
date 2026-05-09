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
  transactions_count: number;
};

type PortfolioSummary = {
  total_invested: number;
  current_value: number;
  pnl: number;
  pnl_percent: number;
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

function getNextPacDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const thisMonthPac = new Date(year, month, 2);

  if (now <= thisMonthPac) return thisMonthPac;

  return new Date(year, month + 1, 2);
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
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const year = useMemo(() => new Date().getFullYear(), []);
  const nextPacDate = useMemo(() => getNextPacDate(), []);

  async function loadPortfolio() {
    try {
      await fetch("/api/pac/refresh-crypto", { cache: "no-store" });
      await fetch("/api/pac/refresh-etf", { cache: "no-store" });

      const response = await fetch("/api/pac/portfolio", {
        cache: "no-store",
      });

      const data = await response.json();

      const sortedAssets = [...(data.assets || [])].sort(
        (a, b) => Number(b.monthly_amount) - Number(a.monthly_amount)
      );

      setAssets(sortedAssets);
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

  const chartPoints = useMemo(() => {
    const values = [];
    let value = 0;
    const monthlyRate = 0.12 / 12;

    for (let month = 0; month <= 120; month++) {
      if (month > 0) value = value * (1 + monthlyRate) + monthlyTotal;
      values.push(value);
    }

    return values;
  }, [monthlyTotal]);

  const maxChartValue = Math.max(...chartPoints, 1);

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
        <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm text-white/50">10Y simulation</div>
              <h2 className="mt-1 text-2xl font-extrabold">
                Portfolio growth curve
              </h2>
            </div>
            <div className="text-right text-sm text-white/50">
              12% yearly assumption
            </div>
          </div>

          <div className="mt-6 flex h-48 items-end gap-1">
            {chartPoints.filter((_, i) => i % 3 === 0).map((point, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-[#ff6a00]/70 to-[#4f8fff]/80"
                style={{
                  height: `${Math.max((point / maxChartValue) * 100, 2)}%`,
                }}
              />
            ))}
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
              Quantities, invested capital and P/L are calculated from real
              PAC transactions.
            </p>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {assets.map((asset) => (
              <MobileAssetCard key={asset.id} asset={asset} monthlyTotal={monthlyTotal} />
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[950px] text-sm">
              <thead className="bg-black/30 text-white/50">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Asset</th>
                  <th className="px-6 py-4 text-left font-medium">Type</th>
                  <th className="px-6 py-4 text-right font-medium">Monthly</th>
                  <th className="px-6 py-4 text-right font-medium">Invested</th>
                  <th className="px-6 py-4 text-right font-medium">Value</th>
                  <th className="px-6 py-4 text-right font-medium">Price</th>
                  <th className="px-6 py-4 text-right font-medium">Quantity</th>
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
                      {formatEUR(asset.current_price)}
                    </td>
                    <td className="px-6 py-4 text-right text-white/70">
                      {formatNumber(asset.total_quantity, asset.type === "Crypto" ? 8 : 5)}
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

function MobileAssetCard({
  asset,
  monthlyTotal,
}: {
  asset: PortfolioAsset;
  monthlyTotal: number;
}) {
  const weight =
    monthlyTotal > 0 ? (Number(asset.monthly_amount) / monthlyTotal) * 100 : 0;

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
          <div className="font-extrabold">{weight.toFixed(1)}%</div>
          <div className="text-xs text-white/45">weight</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <MiniData label="Monthly" value={formatEUR(asset.monthly_amount)} />
        <MiniData label="Invested" value={formatEUR(asset.total_invested)} />
        <MiniData label="Value" value={formatEUR(asset.current_value)} />
        <MiniData label="Price" value={formatEUR(asset.current_price)} />
        <MiniData label="Quantity" value={formatNumber(asset.total_quantity, asset.type === "Crypto" ? 8 : 5)} />
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