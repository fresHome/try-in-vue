import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/antdesign"
    },
    {
      path: "/antdesign",
      component: () => import("@/page/antdesign/AntDesign.vue")
    }
  ]
});
