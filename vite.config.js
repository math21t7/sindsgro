// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // about: resolve(__dirname, "src/about.html"),
        om_sindsgro: resolve(__dirname, "src/om-sindsgro.html"),
        living_yolates: resolve(__dirname, "src/living-yolates.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        booking: resolve(__dirname, "src/booking.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        billede1: resolve(__dirname, "src/images/6470bdd2a1ce302000032c06.webp"),
      },
    },
  },
});
