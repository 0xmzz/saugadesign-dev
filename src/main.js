
import "vuetify/dist/vuetify.min.css";


import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Vuetify);

import VueRouter from "vue-router";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(VueRouter);

Vue.component("app", App);

new Vue({
  Vue,
  vuetify: new Vuetify(),
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");
// new Vue({
//   el: '#app',
//   vuetify: new Vuetify({iconfont: 'fa4'}),
//   store: store,
//   router: router
// })
