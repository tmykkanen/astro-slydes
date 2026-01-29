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
    greeting: z.object({
      hello: z.string(),
    }),
  }),
});

export const collections = {
  config: siteConfig,
};
