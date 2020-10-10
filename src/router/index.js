import 'babel-polyfill'
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import aboutus from "../views/AboutUs";
import installation from "../views/installation";
import Cart from "../views/Cart";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/installation",
    name: "installation",
    component: installation,

    
  },
  { path: "/aboutus", name: "aboutus", component: aboutus },
  { path: "/cart", name: "cart", component: Cart },
 
];

const router = new VueRouter({
  routes,
});

export default router;
