import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHeader } from "@/components/site/PageShell";
import { steps } from "@/lib/site-data";

const title = "How We Work | SHOPIFY EXPERT";
const description =
  "Our four-step Shopify consulting process: consultation, store review, strategy, and implementation.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="How We Work"
        title="A clear four-step working process"
        intro="From first conversation to implementation, you always know the next step."
      />

      <section className="bg-ink py-20 text-ink-foreground lg:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article key={s.n} className="rounded-2xl border border-ink-border bg-white/[0.04] p-7">
              <p className="font-display text-3xl font-bold text-primary">{s.n}</p>
              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Start With a Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
