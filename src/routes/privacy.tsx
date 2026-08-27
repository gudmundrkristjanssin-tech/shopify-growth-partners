import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const title = "Privacy Policy | SHOPIFY EXPERT";
const description =
  "How SHOPIFY EXPERT collects, uses, and protects information submitted by Shopify store owners through our consulting inquiry form.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container-page max-w-3xl py-20">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
        <div className="mt-8 grid gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            This policy explains how SHOPIFY EXPERT handles information you provide when contacting
            our consulting team.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p>
            We collect only the information you submit through our inquiry form: your name, email
            address, store URL, the type of help you are looking for, and your message.
          </p>
          <h2 className="text-xl font-semibold text-foreground">How we use it</h2>
          <p>
            Your information is used to respond to your inquiry, discuss your requirements, and
            deliver consulting services you request. We do not sell or rent your information.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Retention and access</h2>
          <p>
            We keep inquiry details only as long as needed for our correspondence and any resulting
            engagement. You may ask us to update or delete your details at any time.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For any privacy question, please reach out through the contact form on our homepage.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
