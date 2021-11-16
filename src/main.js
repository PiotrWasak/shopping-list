import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {ButtonPlugin, ButtonComponent} from "@syncfusion/ej2-vue-buttons";

Vue.component(ButtonPlugin.name, ButtonComponent);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
