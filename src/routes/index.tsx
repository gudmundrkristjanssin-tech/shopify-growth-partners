import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Handshake,
  LineChart,
  MessagesSquare,
  Package,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  UserRoundCheck,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero.jpg";
import samanthaAsset from "@/assets/samantha.jpg.asset.json";
import victoriaAsset from "@/assets/victoria.png.asset.json";

const samanthaImg = samanthaAsset.url;
const victoriaImg = victoriaAsset.url;

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

const services = [
  {
    icon: Store,
    title: "Shopify Store Optimization",
    text: "Professional review and improvement recommendations for Shopify stores.",
  },
  {
    icon: LineChart,
    title: "Conversion Improvement",
    text: "Identifying opportunities throughout the customer journey that can help create a smoother purchasing experience.",
  },
  {
    icon: ShoppingBag,
    title: "Product Page Optimization",
    text: "Improving product presentation, descriptions, structure, and customer-facing information.",
  },
  {
    icon: BarChart3,
    title: "E-commerce Growth Consulting",
    text: "Practical strategies designed around each store's products, customers, and business objectives.",
  },
  {
    icon: Package,
    title: "Supplier Sourcing & Connections",
    text: "Helping store owners explore suitable supplier options based on their specific product and business requirements.",
  },
];

const steps = [
  {
    n: "01",
    title: "Consultation",
    text: "We learn about your store, products, challenges, and goals.",
  },
  {
    n: "02",
    title: "Store Review",
    text: "We identify potential opportunities and areas for improvement.",
  },
  {
    n: "03",
    title: "Strategy",
    text: "We provide practical recommendations tailored to your business.",
  },
  {
    n: "04",
    title: "Implementation",
    text: "We help you move forward with the agreed improvements and growth strategy.",
  },
];

const reasons = [
  { icon: UserRoundCheck, title: "Personalized approach" },
  { icon: BadgeCheck, title: "Shopify-focused expertise" },
  { icon: MessagesSquare, title: "Transparent communication" },
  { icon: Target, title: "Practical recommendations" },
  { icon: Sparkles, title: "Business-focused strategies" },
  { icon: Handshake, title: "Professional support" },
];

const team = [
  {
    name: "Samantha Williams",
    role: "Shopify Expert",
    img: samanthaImg,
    text: "Samantha Williams works with Shopify store owners to identify opportunities for store improvement, customer experience optimization, and e-commerce growth. She takes a practical, business-focused approach to helping online stores perform more effectively.",
    cta: "Work With Samantha",
    ctaLink: "https://discord.com/channels/@me",
    external: true,
  },
  {
    name: "Victoria Hayes",
    role: "Shopify Expert",
    img: victoriaImg,
    text: "Victoria Hayes helps Shopify businesses improve their online presence and develop practical e-commerce strategies tailored to their business goals. She focuses on creating better store experiences and helping business owners make informed growth decisions.",
    cta: "Work With Victoria",
    ctaLink: "#contact",
    external: false,
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <main>
        {/* Hero */}
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
                We help Shopify store owners improve their stores, strengthen the customer
                experience, optimize conversions, and develop practical strategies for sustainable
                e-commerce growth.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Helping Shopify store owners build, improve &amp; grow their e-commerce businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
                >
                  Book a Consultation <ArrowRight className="size-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Get Started
                </a>
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

        {/* About */}
        <section id="about" className="scroll-mt-20 py-20 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Meet the Shopify Expert Team
              </h2>
            </div>
            <div className="grid gap-5 text-base leading-relaxed text-muted-foreground">
              <p>
                SHOPIFY EXPERT is a professional e-commerce consulting team dedicated to helping
                Shopify store owners identify opportunities, improve their online stores, and build
                stronger customer experiences.
              </p>
              <p>
                We take a practical and transparent approach, working with each business according
                to its individual goals, products, and target customers.
              </p>
            </div>
          </div>
        </section>

        {/* Experts */}
        <section id="experts" className="scroll-mt-20 bg-surface py-20 lg:py-24">
          <div className="container-page">
            <p className="eyebrow">Team</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Our Experts</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                    <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                    <a
                      href={m.name === "Samantha Williams" ? "https://discord.com/channels/@me" : "#contact"}
                      target={m.name === "Samantha Williams" ? "_blank" : undefined}
                      rel={m.name === "Samantha Williams" ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                    >
                      {m.cta} <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-20 lg:py-24">
          <div className="container-page">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
              Shopify consulting built around your store
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lift"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-ink py-20 text-ink-foreground lg:py-24">
          <div className="container-page">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              A clear four-step working process
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <article
                  key={s.n}
                  className="rounded-2xl border border-ink-border bg-white/[0.04] p-7"
                >
                  <p className="font-display text-3xl font-bold text-primary">{s.n}</p>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
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

        {/* CTA */}
        <section className="border-y border-border bg-surface py-20">
          <div className="container-page max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Improve Your Shopify Store?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us about your store and what you&apos;re looking to achieve. Our team will review
              your needs and help you determine the right next step.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Start a Conversation <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-20 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Start a conversation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Share a few details about your Shopify store and goals. Samantha and Victoria review
                every inquiry personally and will respond with practical next steps.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                SHOPIFY EXPERT is an independent consulting team and is not affiliated with
                Shopify Inc.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
