import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Projects from '../views//projects/Projects.vue'
import ProjectDetails from '../views//projects/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //lazy loading routes https://router.vuejs.org/guide/advanced/lazy-loading.html
    path: '/about',
    name: 'About',  
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
  //redirect
  {
    path: '/all-projects',
    redirect: '/projects'
  },
  //404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
