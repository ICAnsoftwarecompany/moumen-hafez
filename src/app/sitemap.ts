import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getArticles } from "@/content/articles";
import { locales } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/consultation", "/articles"];
  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteConfig.domain}${getLocalizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const articleEntries = locales.flatMap((locale) =>
    getArticles(locale).map((article) => ({
      url: `${siteConfig.domain}${getLocalizedPath(locale, `/articles/${article.slug}`)}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...articleEntries];
}
