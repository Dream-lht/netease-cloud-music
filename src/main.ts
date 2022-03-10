import { createApp } from "vue";
import App from "./App.vue";
import type { App as AppType } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store";
import { router } from "./router";

const app: AppType = createApp(App);
app.use(store);

//引入Element-plus
app.use(ElementPlus);
app.use(router);

app.mount("#app");
