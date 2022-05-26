import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import router from "./router";

if (!window.localStorage.getItem("dvtsk")) {
  window.localStorage.setItem(
    "incomplete",
    JSON.stringify([
      {
        id: 1,
        title: "Welcome to Devtask!",
      },
      {
        id: 0,
        title: "Check these items off to get started.",
      },
    ])
  );
  window.localStorage.setItem("currentId", "2");
  window.localStorage.setItem("dvtsk", "1");
}
createApp(App).use(router).use(createPinia()).mount("#app");
