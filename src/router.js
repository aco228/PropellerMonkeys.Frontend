import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Console from "./views/Console.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/console",
      name: "console",
      component: Console
    }
  ]
});
