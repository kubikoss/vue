import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowName from "../views/ShowName.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ukazatjmeno/:name",
    name: "ShowName",
    component: ShowName,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
