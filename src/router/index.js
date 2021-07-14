import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '@/components/MainHome.vue'

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/contact/Contact.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/product/Products.vue')
  },
  {
    path: '/product',
    name: 'ProductDetail',
    component: () => import('@/pages/product/ProductDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/pages/cart/Cart.vue')
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('@/pages/bill/Bill.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/admin/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/admin/Dashboard.vue')
  },
  {
    path: '/admin-products',
    name: 'AdminProduct',
    component: () => import('@/admin/product/AdminProduct.vue')
  },
  {
    path: '/admin-staffs',
    name: 'AdminStaff',
    component: () => import('@/admin/staff/AdminStaff.vue')
  },
  {
    path: '/update-staffs',
    name: 'UpdateStaff',
    component: () => import('@/admin/staff/UpdateStaff.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
