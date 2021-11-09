import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { keepAline: true }
  },
  {
    path: '/category',
    component: Category,
    meta: { keepAline: false }
  },
  {
    path: '/shopcart',
    component: Shopcart,
    meta: { keepAline: false }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { keepAline: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
