import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { useAuthStore } from "../stores/counter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: true,
      },
      component: Home,
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/Login.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const store = useAuthStore();

  const token = localStorage.getItem("token");
  if (token && !store.usuarioLogado ) {
    await store.relogar(token);
  }

  if (to.meta.requiresAuth && !store.usuarioLogado) {
    return "/login";
  }
});

export default router;
