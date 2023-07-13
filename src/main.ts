import { createApp } from "vue";
import "./assets/sass/global/main.sass";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
