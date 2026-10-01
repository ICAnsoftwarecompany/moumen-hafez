export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export type Direction = "rtl" | "ltr";

export type ArticleCategory =
  | "Business Technology"
  | "Software Decisions"
  | "AI & Automation"
  | "CRM & Customer Operations"
  | "Digital Transformation"
  | "Practical Experience";

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  locale: Locale;
  content: string[];
  optionalSocialUrl?: string;
};
