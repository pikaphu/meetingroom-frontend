import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import store from "./store/"; // global vars
import router from "./router/index.js"; // *router must be last import and before store

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/styles.css";
import * as jquery from "jquery";

Vue.config.productionTip = false;
Vue.prototype.jquery = jquery;
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
