// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Pages/HomePage'
import loginView from '../views/loginView'
import signupView from '../views/signupView'
import ProductsPage from '../components/Pages/ProductsPage'
import CartView from '../views/CartView'
import ProductDetail from '../components/Pages/ProductDetail'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
    
  },
 
  {
    path: '/login',
    name: 'login',
    component: loginView,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signupView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },
  {
    path: '/productdetail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
