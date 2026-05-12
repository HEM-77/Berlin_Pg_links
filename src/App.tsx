import { PlatformCard } from "./components/PlatformCard"

function App() {
  const marketplaceUrl = import.meta.env.VITE_MARKETPLACE_URL as string | undefined
  const esgUrl = import.meta.env.VITE_ESG_URL as string | undefined
  const insightsUrl = import.meta.env.VITE_INSIGHTS_URL as string | undefined

  return (
    <div className="min-h-screen bg-background page-ambient flex flex-col">
      <main className="flex-1 mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:py-14">
        {/* Header with Logo */}
        <header className="flex flex-col items-center">
          <img
            src="/berlin-logo.jpeg"
            alt="Berlin Packaging"
            className="h-16 w-auto sm:h-[4.5rem]"
          />

          {/* Brand tagline */}
          <p className="mt-4 text-center text-sm font-semibold tracking-[0.04em] text-muted-foreground">
            Berlin Packaging{" "}
            <span className="mx-2 text-border">|</span>{" "}
            Sustainability Tools
          </p>

          {/* Premium badge with status dot */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full badge-glass border border-border/50 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.03)] hover:border-border/70">
            <span className="size-1.5 rounded-full bg-accent status-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Enterprise Platform
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mx-auto mt-10 max-w-2xl text-center sm:mt-12">
          <h1 className="text-[1.85rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.12]">
            Access{" "}
            <span className="gradient-text font-bold">Sustainability</span>
            {" "}Platforms
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-[1.05rem] sm:leading-[1.7]">
            Centralized access to sustainability marketplace tools, ESG supplier assessment systems, and sustainability intelligence platforms.
          </p>
        </section>

        {/* Cards Grid */}
        <section
          aria-label="Sustainability platforms"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3 md:gap-5"
        >
          <PlatformCard
            title="Sustainability Marketplace"
            description="Discover and source sustainable packaging solutions from verified eco-conscious suppliers."
            cta="Open Marketplace"
            href={marketplaceUrl}
          />
          <PlatformCard
            title="Supplier Assessment Platform"
            description="Comprehensive ESG evaluation tools to assess supplier sustainability performance."
            cta="Open ESG Platform"
            href={esgUrl}
          />
          <PlatformCard
            title="Sustainability Insights Tool"
            description="Analytics platform for tracking corporate sustainability metrics and benchmarks."
            cta="Open Insights Tool"
            href={insightsUrl}
          />
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center gap-2 sm:mt-16">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-success status-pulse" />
            <span className="text-[11px] font-medium text-muted">
              All systems operational
            </span>
          </div>
          <p className="text-xs text-muted">
            © 2026 Packgine. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
