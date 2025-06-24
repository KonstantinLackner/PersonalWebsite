import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
export default defineConfig({
  base: "./",
  plugins: [],
  css: {
    postcss: {

      plugins: [tailwindcss()],
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/Konsortium-Bildbeschreibung.html'
      },
    },
    target: 'esnext'
  },
});
