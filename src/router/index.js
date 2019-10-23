import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tanginabobotrip',
    name: 'tanginabobotrip',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TanginaboboTrip.vue')
  },
  {
    path: '/rayymondmpp',
    name: 'rayymondmpp',
    component: () => import(/* webpackChunkName: "about" */ '../views/RayymondMpp.vue')
  },
  {
    path: '/gangphotoshoot',
    name: 'gangphotoshoot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photoshoot.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
