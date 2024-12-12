import { createApp } from "vue";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";
import "azion-theme";

import App from "./App.ce.vue";

window.mountWidget = (options) => {
  const { target = "body", message = "default" } = options;

  const parentContainer = document.createElement("div");
  parentContainer.classList.add("azion", "azion-light");

  const container = document.createElement("div");
  container.id = "my-widget-container";
  parentContainer.appendChild(container);

  document.querySelector(target).appendChild(parentContainer);

  const app = createApp(App, { message });
  app.mount("#my-widget-container");
};
