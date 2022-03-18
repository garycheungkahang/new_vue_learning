/*
 * @Author: your name
 * @Date: 2022-02-28 16:09:49
 * @LastEditTime: 2022-03-01 14:28:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// import firebase auth service
import { projectAuth } from "./firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    .use(router)
    .mount("#app");
  }
});
