import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "Default",
    },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    meta: {
      layout: "Dashboard",
    },
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashbord" */ "../views/Dashboard.vue"),
  },
  {
    path: "/book/:id",
    name: "BooksDetails",
    meta: {
      layout: "Default",
    },
    component: () => import("../views/BooksDetails.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    meta: {
      layout: "Default",
    },
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    meta: {
      layout: "Default",
    },
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: "Dashboard",
    },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    meta: {
      layout: "Dashboard",
    },
    component: () => import("../views/Setting.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
