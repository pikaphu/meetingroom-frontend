import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register";
import Login from "../views/Login";
import EquipmentList from "../views/equipment/EquipmentList";
import EquipmentForm from "../views/equipment/EquipmentForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: "/equipment",
    name: "equipment-list",
    component: EquipmentList,
    meta: {
      auth: true
    }
  },
  {
    path: "/equipment/form",
    name: "equipment-form",
    component: EquipmentForm,
    meta: {
      auth: true
    }
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
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(
        /* webpackChunkName: "Test" */
        "../views/Test.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// ตรวจสอบสิทธิ์การเข้าถึงหน้า
router.beforeEach((to, from, next) => {
  // console.log(to.meta); // eslint-disable-line no-console

  if (!to.meta.auth) return next();

  // eslint-disable-next-line no-console
  // console.log(router.app.$store);

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
