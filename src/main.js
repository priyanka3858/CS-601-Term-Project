import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

//  mount the app to the root element of the DOM

createApp(App).use(router).mount("#app");
