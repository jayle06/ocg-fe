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
    component: () => import('@/pages/about/About.vue')
  },
  {
    path: '/lookup',
    name: 'Lookup',
    component: () => import('@/pages/lookup/Lookup.vue')
  },
  {
    path: '/orders',
    name: 'Order',
    component: () => import('@/pages/lookup/Order.vue')
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
    path: '/products/:id',
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
    component: () => import('@/admin/Dashboard.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/admin-products',
    name: 'AdminProduct',
    component: () => import('@/admin/product/AdminProduct.vue')
  },
  {
    path: '/new-products',
    name: 'CreateProduct',
    component: () => import('@/admin/product/CreateProduct.vue')
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('@/admin/product/Images.vue')
  },
  {
    path: '/admin-staffs',
    name: 'AdminStaff',
    component: () => import('@/admin/staff/AdminStaff.vue')
  },
  {
    path: '/admin-staffs/:id',
    name: 'UpdateStaff',
    component: () => import('@/admin/staff/UpdateStaff.vue')
  },
  {
    path: '/new-staffs',
    name: 'CreateStaff',
    component: () => import('@/admin/staff/CreateStaff.vue')
  },
  {
    path: '/admin-orders',
    name: 'AdminOrder',
    component: () => import('@/admin/order/AdminOrder.vue')
  },
  {
    path: '/profiles',
    name: 'Profile',
    component: () => import('@/admin/profile/Profile.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
