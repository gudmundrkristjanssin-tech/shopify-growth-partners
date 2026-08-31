import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import heroImg from "@/assets/hero.jpg";
import { reasons } from "@/lib/site-data";

const title = "SHOPIFY EXPERT | Shopify Experts & E-commerce Consulting";
const description =
  "SHOPIFY EXPERT helps Shopify store owners improve store performance, customer experience, conversions, product pages, and e-commerce growth.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="container-page grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow">Shopify Consulting Team</p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
              SHOPIFY EXPERT
            </h1>
            <p className="mt-5 text-xl font-semibold text-foreground/85 sm:text-2xl">
              Professional Shopify Expertise for Store Owners Ready to Grow
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We help Shopify store owners improve their stores, strengthen the customer experience,
              optimize conversions, and develop practical strategies for sustainable e-commerce
              growth.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Helping Shopify store owners build, improve &amp; grow their e-commerce businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Book a Consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <img
                src={heroImg}
                alt="Shopify store dashboard on a laptop beside packaged products"
                width={1440}
                height={1088}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Why Choose SHOPIFY EXPERT?</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold text-foreground sm:text-4xl">
            Professional Guidance. Practical Strategies. Clear Communication.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <r.icon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-foreground">{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Improve Your Shopify Store?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Tell us about your store and what you&apos;re looking to achieve. Our team will review
            your needs and help you determine the right next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Start a Conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
