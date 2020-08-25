import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ConstactUs from "../views/ContactUs";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import ThankYou from "../views/ThankYou";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/contactus", name: "contactus", component: ConstactUs },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/checkout", name: "checkout", component: Checkout },
  { path: "/thank-you", name: "thankyou", component: ThankYou },
];

const router = new VueRouter({
  routes,
});

export default router;
