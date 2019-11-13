import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      auth: true
    }
    //lazy load// component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// ตรวจสอบสิทธิ์การเข้าถึงหน้า
router.beforeEach((to, from, next) => {
  console.log(to.meta); // eslint-disable-line no-console

  if (!to.meta.auth) return next();

  // eslint-disable-next-line no-console
  console.log(router.app.$store);

  router.app.$store
    .dispatch("get_user_login")
    .then(() => next())
    .catch(() =>
      next({
        name: "login"
      })
    );
});

export default router;
