import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://language-rating.mrcai.dev",
  integrations: [tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
