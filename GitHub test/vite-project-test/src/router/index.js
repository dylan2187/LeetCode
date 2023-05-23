import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { requireAuth: false },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { requireAuth: false },
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('../views/UserInfo.vue'),
    meta: { requireAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = false

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!isLogin) {
      alert('请登录')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
