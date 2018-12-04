import Vue from "vue";
import Router from "vue-router";
import Home from "./Home";
import Demo_1_01_Scroll from "./demos/1.01-scroll/Inheritance";
import Demo_1_02_ScrollComponent from "./demos/1.02-scroll-component";
import Demo_1_03_adaptive_multiselect from "./demos/1.03-adaptive-multiselect";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/1.01-scroll",
      component: Demo_1_01_Scroll
    },
    {
      path: "/1.02-scroll-component",
      component: Demo_1_02_ScrollComponent
    },
    {
      path: "/1.03-adaptive-multiselect",
      component: Demo_1_03_adaptive_multiselect
    }
  ]
});
