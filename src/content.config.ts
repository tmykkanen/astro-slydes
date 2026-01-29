import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const siteConfig = defineCollection({
  loader: glob({
    pattern: "site.config.json",
    base: "src/data",
  }),
  schema: z.object({
    general: z.object({
      name: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      bgImage: z.string(),
    }),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/pages",
  }),
  schema: z.object({
    heading: z.string(),
  }),
});

export const collections = {
  config: siteConfig,
  pages: pagesCollection,
};
