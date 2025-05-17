import { createApp } from "vue";
import "virtual:svg-icons-register";
import "normalize.css";
import "./styles/index.scss";
import App from "./App.vue";
// import { setupVersionPolling } from "../config/version";
import { router } from "./routes";

function bootstrap() {
  const app = createApp(App);

  const pinia = createPinia()
  app.use(pinia);


  app.use(router);

  // setupVersionPolling();

  app.mount("#app");
}

bootstrap();
