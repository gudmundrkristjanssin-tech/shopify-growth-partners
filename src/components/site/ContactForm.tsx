import { useState } from "react";

const needs = [
  "Shopify Store Optimization",
  "Conversion Improvement",
  "Product Page Optimization",
  "E-commerce Growth Consulting",
  "Supplier Sourcing & Connections",
  "Something else",
];

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="store" className="text-sm font-medium">
          Shopify Store URL
        </label>
        <input id="store" name="store" className={field} placeholder="yourstore.myshopify.com" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="need" className="text-sm font-medium">
          What do you need help with?
        </label>
        <select id="need" name="need" defaultValue="" className={field}>
          <option value="" disabled>
            Select an option
          </option>
          {needs.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder="Tell us about your store, products and goals."
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
      >
        Send Inquiry
      </button>

      {sent && (
        <p className="text-sm text-primary">
          Thank you — your inquiry has been noted. We&apos;ll follow up by email.
        </p>
      )}
    </form>
  );
}
