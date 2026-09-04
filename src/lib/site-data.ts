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

import boseImg from "@/assets/bose.jpg";
import samanthaImg from "@/assets/samantha.jpg";
import victoriaImg from "@/assets/victoria.png";
import ameliaImg from "@/assets/amelia.png.asset.json";

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
    img: samanthaImg,
    text: "Samantha Williams works with Shopify store owners to identify opportunities for store improvement, customer experience optimization, and e-commerce growth. She takes a practical, business-focused approach to helping online stores perform more effectively.",
    cta: "Work With Samantha",
    ctaLink: DISCORD_URL,
    external: true,
  },
  {
    name: "Victoria Hayes",
    role: "Shopify Expert",
    img: victoriaImg,
    text: "Victoria Hayes helps Shopify businesses improve their online presence and develop practical e-commerce strategies tailored to their business goals. She focuses on creating better store experiences and helping business owners make informed growth decisions.",
    cta: "Work With Victoria",
    ctaLink: "/contact",
    external: false,
  },
  {
    name: "Bose William",
    role: "Shopify Expert",
    img: boseImg,
    text: "Bose William supports Shopify store owners with clear, actionable guidance on store optimization, customer experience, and sustainable e-commerce growth. He brings a collaborative approach to helping businesses refine their online presence and make confident decisions.",
    cta: "Work With Bose",
    ctaLink: "/contact",
    external: false,
  },
  {
    name: "Amelia Rose",
    role: "Shopify Expert",
    img: ameliaImg.url,
    text: "Amelia Rose helps Shopify store owners strengthen their online presence and customer experience with practical, business-focused guidance. She works closely with businesses to identify opportunities, refine store operations, and make confident growth decisions.",
    cta: "Work With Amelia",
    ctaLink: "/contact",
    external: false,
  },
];
