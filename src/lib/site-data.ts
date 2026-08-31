import {
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

import boseAsset from "@/assets/bose.jpg.asset.json";
import samanthaAsset from "@/assets/samantha.jpg.asset.json";
import victoriaAsset from "@/assets/victoria.png.asset.json";

export const DISCORD_URL = "https://discord.com/channels/@me";

export const services = [
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

export const steps = [
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

export const reasons = [
  { icon: UserRoundCheck, title: "Personalized approach" },
  { icon: BadgeCheck, title: "Shopify-focused expertise" },
  { icon: MessagesSquare, title: "Transparent communication" },
  { icon: Target, title: "Practical recommendations" },
  { icon: Sparkles, title: "Business-focused strategies" },
  { icon: Handshake, title: "Professional support" },
];

export const team = [
  {
    name: "Samantha Williams",
    role: "Shopify Expert",
    img: samanthaAsset.url,
    text: "Samantha Williams works with Shopify store owners to identify opportunities for store improvement, customer experience optimization, and e-commerce growth. She takes a practical, business-focused approach to helping online stores perform more effectively.",
    cta: "Work With Samantha",
    ctaLink: DISCORD_URL,
    external: true,
  },
  {
    name: "Victoria Hayes",
    role: "Shopify Expert",
    img: victoriaAsset.url,
    text: "Victoria Hayes helps Shopify businesses improve their online presence and develop practical e-commerce strategies tailored to their business goals. She focuses on creating better store experiences and helping business owners make informed growth decisions.",
    cta: "Work With Victoria",
    ctaLink: "/contact",
    external: false,
  },
];
