import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {ButtonPlugin, ButtonComponent} from "@syncfusion/ej2-vue-buttons";
import SyncfusionTextBox from 'currenda-generic-vue/src/components/generic/SyncfusionTextBox.vue';

Vue.component(ButtonPlugin.name, ButtonComponent);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
