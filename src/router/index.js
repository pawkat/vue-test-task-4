import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Patient1 from '../views/patient-1.vue'
import Patient2 from '../views/patient-2.vue'
import Patient3 from '../views/patient-3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patient-1',
    name: 'Patient 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/patient-1.vue')
    component: Patient1
  },
  {
    path: '/patient-2',
    name: 'Patient 2',
    component: Patient2
  },
  {
    path: '/patient-3',
    name: 'Patient 3',
    component: Patient3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
