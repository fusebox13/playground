import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Element from 'element-ui';
import messages from './assets/lang/messages.js';
import Count from "@/components/Count.vue";

Vue.use(Element);
Vue.config.productionTip = false;

Vue.component('Count', Count);

//Middleware
router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
