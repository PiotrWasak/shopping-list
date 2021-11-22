import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import SyncfusionTextBox from 'currenda-generic-vue/src/components/generic/SyncfusionTextBox.vue';
import SyncfusionGrid from 'currenda-generic-vue/src/components/generic/SyncfusionGrid.vue';
import SyncfusionButton from 'currenda-generic-vue/src/components/generic/SyncfusionButton';


Vue.component("SyncfusionTextBox", SyncfusionTextBox);
Vue.component("SyncfusionButton", SyncfusionButton);
Vue.component("SyncfusionGrid", SyncfusionGrid)


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
