import { createFileRoute } from "@tanstack/react-router";

import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { DISCORD_URL } from "@/lib/site-data";

const title = "Contact | SHOPIFY EXPERT Consulting Inquiries";
const description =
  "Tell us about your Shopify store and goals. Samantha Williams and Victoria Hayes review every inquiry personally.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation"
        intro="Share a few details about your Shopify store and goals and we will respond with practical next steps."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Samantha and Victoria review every inquiry personally and will help you determine the
              right next step for your store.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer to chat on Discord?{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Message Samantha Williams
              </a>
              .
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              SHOPIFY EXPERT is an independent consulting team and is not affiliated with Shopify Inc.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
