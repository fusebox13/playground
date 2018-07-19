import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Playground from "./views/Playground.vue";
import Element from "./views/Element.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'Fuseworks - Home',
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: 'Fuseworks - About',
      }
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
      meta: {
        title: 'Fuseworks - Playground',
      }
    },
    {
      path: "/element",
      name: "element",
      component: Element,
      meta: {
        title: 'Fuseworks - Element',
      }
    }
  ]
});


