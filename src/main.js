import { createApp } from "vue";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";
import "azion-theme";

import PrimeVue from "primevue/config";
import App from "./App.ce.vue";

const app = createApp(App, { message: "yarn dev" });

app.use(PrimeVue);
app.mount("#app");
