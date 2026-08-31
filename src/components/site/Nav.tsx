import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Experts", to: "/experts" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="SHOPIFY EXPERT logo"
            width={1024}
            height={1024}
            className="size-8 shrink-0 object-contain"
          />
          <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground">
            SHOPIFY<span className="text-primary"> EXPERT</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
