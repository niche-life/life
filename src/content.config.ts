import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});
const news = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/docs/news" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    url: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  docs,
  news,
};
