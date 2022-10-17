
import VueRouter from 'vue-router'
import BarApp from '../pages/BarApp.vue'
import HomePage from '../pages/HomePage.vue'
import ApartmentPage from '../pages/ApartmentPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'

const routes = [
    { 
        name:'HomePage',
        path: '/', 
        component: HomePage 
    },
    { 
        name:'ApartmentPage',
        path: '/apartments/:id', 
        component: ApartmentPage 
    },
    { 
         name:'Bar',
         path: '/bar',
         component: BarApp 
    },
    { 
        name:'ErrorPage',
        path: '*', 
        component: ErrorPage 
    }
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  export default router