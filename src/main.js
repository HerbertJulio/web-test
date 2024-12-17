import { defineCustomElement } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.ce.vue";


const MeuWidgetElement = defineCustomElement(App, {
  configureApp(app) {
    app.use(PrimeVue);
  },
});

customElements.define("meu-widget", MeuWidgetElement);
