// 1. Define route components.
import { createRouter, createWebHistory } from "vue-router";
// These can be imported from other files
import Home from "./Views/Home.vue";
import DashBoard from "./Views/DashBoard.vue";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/dashBoard', component: DashBoard },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;