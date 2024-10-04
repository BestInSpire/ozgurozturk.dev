import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: () => import("../views/MySelf.vue") },
  { path: "/blog", component: () => import("../views/Blog.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
