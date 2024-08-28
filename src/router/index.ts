import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard' 
// import { createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Demo1View from '../views/Demo1View.vue'
import Demo2View from '../views/Demo2View.vue'
import UploadView from '@/views/UploadView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: { requiresConfirm: false, requiresAuth: true  },
  },
  {
    path: '/demo',
    name: 'demo',
    children: [
      { 
        path: '1', 
        component: Demo1View,
        meta: { requiresAuth: true }
      },
      { 
        path: '2', 
        component: Demo2View,
        meta: { requiresAuth: true }
      }
    ]
    // component: DemoView,
    // meta: { requiresConfirm: false, requiresAuth: true },
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView,
    meta: { requiresConfirm: true, requiresAuth: true  },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

createRouterGuard(router);

export default router
