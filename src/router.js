import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/day",
      name: "Picture of the Day",
      // route level code-splitting
      // this generates a separate chunk (Picture of the Day".[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "Picture of the Day"" */ "./views/PictureOfTheDay.vue"
        )
    },
    {
      path: "/month",
      name: "Pictures of the Month",
      // route level code-splitting
      // this generates a separate chunk (Pictures of the Month".[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "Pictures of the Month"" */ "./views/PicturesOfTheMonth.vue"
        )
    }
  ]
});
