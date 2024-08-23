import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://bmp.githi.io",
  base: 'tarkam',
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
