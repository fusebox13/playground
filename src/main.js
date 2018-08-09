import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Element from 'element-ui';
import messages from './assets/lang/messages.js';

Vue.use(Element);
Vue.config.productionTip = false;

//Middleware
router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});


new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    load() {
      console.log("Loading... from local storage");
      this.$store.dispatch('LOAD_BULLET_POINTS_SERIALIZED_STATE');
      this.$store.dispatch('LOAD_ACTIVE_TAB_SERIALIZED_STATE');
    }
  },
  created(){
    this.load();
  }
}).$mount("#app");
