import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/Home.vue'
import CategoriesPage from '../components/Categories.vue'
import ContactPage from '../components/Contact.vue'
import AboutUs from '../components/AboutUs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/categories/:id/:page',
    name: 'CategoriesPage',
    component: CategoriesPage
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
