import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { istarbar: true }
  },
  {
    path: '/category',
    component: Category,
    meta: { istarbar: true }
  },
  {
    path: '/shopcart',
    component: Shopcart,
    meta: { istarbar: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { istarbar: true }
  },
  {
    path: '/detail',
    component: Detail,
    meta: { keepAline: false, istarbar: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
