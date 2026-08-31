import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHeader } from "@/components/site/PageShell";
import { services } from "@/lib/site-data";

const title = "Services | Shopify Store Optimization & Growth Consulting";
const description =
  "Shopify store optimization, conversion improvement, product page optimization, e-commerce growth consulting, and supplier sourcing.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Shopify consulting built around your store"
        intro="Practical services designed around your products, customers, and business objectives."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lift"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <s.icon className="size-5" />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="container-page mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Book a Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
