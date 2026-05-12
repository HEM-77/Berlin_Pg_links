import { PlatformCard } from "./components/PlatformCard"

function App() {
  const marketplaceUrl = import.meta.env.VITE_MARKETPLACE_URL as string | undefined
  const esgUrl = import.meta.env.VITE_ESG_URL as string | undefined
  const insightsUrl = import.meta.env.VITE_INSIGHTS_URL as string | undefined

  return (
    <div className="min-h-screen bg-background page-ambient flex flex-col">
      <main className="flex flex-1 flex-col mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-6">

        {/* Header */}
        <header className="flex flex-col items-center">
          <img
            src="/berlin-logo.jpeg"
            alt="Berlin Packaging"
            className="h-16 w-auto sm:h-20"
          />

          {/* Branding */}
          <p className="mt-3 text-center text-[14px] font-semibold tracking-[0.01em] text-muted-foreground sm:text-[1rem]">
            Berlin Packaging
            <span className="mx-2 text-border">|</span>
            Sustainability Tools
          </p>

          {/* Enterprise Badge */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="size-2 rounded-full bg-accent status-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Enterprise Platform
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto mt-10 max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-[2.4rem] font-semibold tracking-tight leading-[1.05] text-foreground sm:text-[3.8rem] lg:text-[4.2rem]">
            Access{" "}
            <span className="gradient-text font-bold">
              Sustainability
            </span>{" "}
            Platforms
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-[1.8] text-muted-foreground sm:text-[1.08rem]">
            Centralized access to sustainability marketplace tools, ESG supplier
            assessment systems, and sustainability intelligence platforms.
          </p>
        </section>

        {/* Cards */}
        <section
          aria-label="Sustainability platforms"
          className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 lg:max-w-[1240px] xl:max-w-[1340px]"
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
        <footer className="mt-8 border-t border-border/60 pt-5 lg:mt-9">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Packgine. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-success status-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default App
