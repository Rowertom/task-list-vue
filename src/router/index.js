import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  {
    path: '/todo',
    name: 'TodoApp',
    component: () => import('../views/TodoApp.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
