import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Experts", to: "/experts" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="SHOPIFY EXPERT logo"
              width={1024}
              height={1024}
              loading="lazy"
              className="size-8 shrink-0 object-contain"
            />
            <p className="font-display text-sm font-bold tracking-[0.2em]">
              SHOPIFY<span className="text-primary"> EXPERT</span>
            </p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Professional Shopify &amp; E-commerce Consulting
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            Team: Samantha Williams <span className="text-ink-border">|</span> Victoria Hayes
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-muted">
            Navigation
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-muted">Legal</p>
          <ul className="mt-4 grid gap-2">
            <li>
              <Link to="/privacy" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SHOPIFY EXPERT. All rights reserved.</p>
          <p>An independent consulting team. Not affiliated with Shopify Inc.</p>
        </div>
      </div>
    </footer>
  );
}
