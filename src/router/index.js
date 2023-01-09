import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaintingDetails from '../views/painting/PaintingDetails.vue'
import AnecdoteView from '../views/anecdote/AnecdoteView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/anecdote/:id',
    name: 'anecdote',
    component: AnecdoteView,
    props: true
  },
  {
    path: '/painting/:id',
    name: 'painting',
    component: PaintingDetails,
    props: true
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/QuestionView.vue')
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
