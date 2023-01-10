import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/:pageType/:id?',
    name: 'talking',
    component: () => import('../views/TalkingView.vue'),
    props: true
  },
  {
    path: '/anecdote/:id',
    name: 'anecdote',
    component: () => import('../views/AnecdoteView.vue'),
    props: true
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import('../views/QuestionView.vue'),
    props: true
  },
  {
    path: '/map/:id',
    name: 'map',
    component: () => import('../views/MapView.vue'),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
