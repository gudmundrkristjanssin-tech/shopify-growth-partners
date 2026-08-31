import type { ReactNode } from "react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-surface py-16 lg:py-20">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
