import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/track",
      name: "track",
      // @ts-ignore
      component: () => import("@/views/Track.vue"),
    },
    {
      path: "/get-a-quote",
      name: "get-a-quote",
      component: () => import("@/views/GetAQuote.vue")
    }
  ],
})

export default router
