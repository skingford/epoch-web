import "normalize.css";
import "./styles/index.scss";
import "virtual:svg-icons-register";
import { PiniaColada } from '@pinia/colada';
import App from "./App.vue";
import { router } from "./routes";
// import { setupVersionPolling } from "../config/version";


function bootstrap() {
  const app = createApp(App);

  const pinia = createPinia()
  app.use(pinia);
  
  // 在 Pinia 之后安装 Pinia Colada
  app.use(PiniaColada, {})


  app.use(router);

  // setupVersionPolling();

  app.mount("#app");
}

bootstrap();
