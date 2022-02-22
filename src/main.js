import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import chartXkcdVue from "chart.xkcd-vue";

createApp(App).use(router).mount("#app");
App.use(chartXkcdVue);
