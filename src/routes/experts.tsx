import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHeader } from "@/components/site/PageShell";
import { team } from "@/lib/site-data";

const title = "Our Experts | SHOPIFY EXPERT";
const description =
  "Meet Samantha Williams and Victoria Hayes, the Shopify experts behind SHOPIFY EXPERT consulting.";

export const Route = createFileRoute("/experts")({
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
  component: ExpertsPage,
});

function ExpertsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Team"
        title="Our Experts"
        intro="Two Shopify experts working directly with store owners on store improvement and growth."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="aspect-[4/5] w-full bg-muted/30">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}, Shopify Expert`}
                  loading="lazy"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold text-foreground">{m.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                {m.external ? (
                  <a
                    href={m.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    {m.cta} <ArrowRight className="size-4" />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    {m.cta} <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
