import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from "../i18n";
import Home from "../views/Home";
import Router from "../components/Router"
Vue.use(VueRouter)

const routes = [
  {
    path: "/:translation",
    component: Router,
    beforeEnter(to, from, next) {
      const translation = to.params.translation;
      if (i18n.locale !== translation) {
        i18n.locale = translation;
      }
      return next();
    },
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "about",
        name: "about",
        component: () =>
            import("../views/About.vue")
      }
    ]
  },
  {
    path: "*",
    redirect: "/" + i18n.locale
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
})

export default router
