import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
    cssInjectedByJsPlugin(), // Plugin para embutir o CSS no JS
  ],
  define: {
    // Substitua 'process.env' por um objeto vazio no navegador
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: "./src/bootstrap.js", // O ponto de entrada do widget
      name: "MyWidget",
      fileName: "index", // Gera "index.js"
      formats: ["iife"], // Gera um script autossuficiente
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // Embute dependências no mesmo arquivo
      },
    },
  },
});
