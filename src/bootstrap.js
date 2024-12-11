import { createApp } from "vue";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";
import "azion-theme";

import App from "./App.ce.vue";

// Função global para montar o widget
window.mountWidget = (options) => {
  const { target = "body", message = "Olá, mundo!" } = options;

  // Cria um container pai com as classes azion e azion-light
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("azion");
  parentContainer.classList.add("azion-light");

  // Cria um container para o widget
  const container = document.createElement("div");
  container.id = "my-widget-container";
  parentContainer.appendChild(container); // Adiciona o container ao container pai

  document.querySelector(target).appendChild(parentContainer); // Adiciona o container pai ao target

  // Monta o widget no container
  const app = createApp(App, { message });
  app.mount("#my-widget-container");
};
