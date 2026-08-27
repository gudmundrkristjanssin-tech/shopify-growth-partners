import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const title = "Terms of Service | SHOPIFY EXPERT";
const description =
  "Terms covering the use of the SHOPIFY EXPERT website and our Shopify consulting and e-commerce advisory services.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container-page max-w-3xl py-20">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
        <div className="mt-8 grid gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            By using this website or engaging SHOPIFY EXPERT for consulting services, you agree to
            the terms below.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Nature of our services</h2>
          <p>
            We provide professional consulting, review, and advisory services for Shopify store
            owners. Recommendations are based on the information you share with us. Business
            outcomes depend on many factors outside our control, and we do not guarantee specific
            sales or revenue results.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Independence</h2>
          <p>
            SHOPIFY EXPERT is an independent consulting team. We are not affiliated with, endorsed
            by, or certified by Shopify Inc. Shopify is a trademark of its respective owner.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Engagements</h2>
          <p>
            The scope, deliverables, timelines, and fees of any project are agreed in writing before
            work begins. Either party may end an engagement with reasonable notice.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Website content</h2>
          <p>
            Content on this site is provided for general information and may change without notice.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
