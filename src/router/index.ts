import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { useAuthStore } from '@/stores/user'
import DashboardView from '@/views/DashboardView.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import XSSComponent from '@/components/Attacks/XSSComponent.vue'

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
       
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: { requiresAuth: true},
      },
    ],
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/xss',
    name: 'xss',
    component: XSSComponent,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isLoggedin

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router