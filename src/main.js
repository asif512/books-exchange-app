import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyDpJerlWcrbM6etEgrDyhvDd0BLnKg_P6Y",
  authDomain: "books-exchange-app.firebaseapp.com",
  projectId: "books-exchange-app",
  storageBucket: "books-exchange-app.appspot.com",
  messagingSenderId: "476491394531",
  appId: "1:476491394531:web:97f217f2aac983ac5bc4d6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
