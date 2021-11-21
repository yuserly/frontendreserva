import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  /*
    {
        path: "/",
        name: "mantenimiento",
        component: () => import("./views/pages/mantenimiento.vue")
    },*/
  {
    path: "/",
    name: "home",
    component: () => import("./views/pages/datos-personales.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  //A Logged-in user can't go to login page again
  if (to.name === "login" && localStorage.getItem("token")) {
    //   let rol = atob(localStorage.getItem('cm9s'));

    router.push({
      name: "home",
      query: {
        to: to.name,
      },
    });

    //the route requires authentication
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      //user not logged in, send them to login page
      router.push({
        name: "home",
        query: {
          to: to.name,
        },
      });
    } else {
      if (!hasAccess(to.name)) {
        //   let rol = atob(localStorage.getItem('cm9s'));

        router.push({
          name: "home",
        });
      }
    }
  }

  return next();
});

function hasAccess(name) {
  // const rol = atob(localStorage.getItem('cm9s'));

  switch (name) {
    case "home":
      return true;

    default:
      return false;
  }
}

export default router;
