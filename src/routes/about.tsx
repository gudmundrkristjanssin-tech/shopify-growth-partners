import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell, PageHeader } from "@/components/site/PageShell";

const title = "About Us | SHOPIFY EXPERT";
const description =
  "SHOPIFY EXPERT is a professional two-person Shopify consulting team helping store owners improve their stores and grow their e-commerce businesses.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Us"
        title="Meet the Shopify Expert Team"
        intro="A professional e-commerce consulting team focused on practical improvements for Shopify store owners."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid max-w-4xl gap-5 text-base leading-relaxed text-muted-foreground">
          <p>
            SHOPIFY EXPERT is a professional e-commerce consulting team dedicated to helping Shopify
            store owners identify opportunities, improve their online stores, and build stronger
            customer experiences.
          </p>
          <p>
            We take a practical and transparent approach, working with each business according to its
            individual goals, products, and target customers.
          </p>
          <p>
            Our team is made up of two Shopify experts, Samantha Williams and Victoria Hayes, who
            review every inquiry personally and work directly with the store owners they support.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/experts"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Meet Our Experts <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
