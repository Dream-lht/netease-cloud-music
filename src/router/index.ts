import { createWebHistory, createRouter, RouterOptions } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, failure) => {
  // console.log(to);
});

export { router };
