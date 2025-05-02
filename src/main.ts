import { createApp } from "vue";
import "virtual:svg-icons-register";
import "./style.css";
import App from "./App.vue";
import { createVersionPolling } from "version-polling";

function bootstrap() {
  const app = createApp(App);

  createVersionPolling({
    vcType: "chunkHash",
    chunkName: "index",
    silent: false,
    onUpdate: (self) => {
      const result = confirm("页面有更新，点击确定刷新页面！");
      if (result) {
        self.onRefresh();
      } else {
        self.onCancel();
      }
    },
  });

  app.mount("#app");
}

bootstrap();
