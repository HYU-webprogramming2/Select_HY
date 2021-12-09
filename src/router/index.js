import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game/:number',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  },
  {
    path: '/results',
    name: 'Result',
    component: () => import('../views/Result.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
