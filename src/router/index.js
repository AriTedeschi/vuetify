import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Challenge from '../views/Challenge.vue'
import Mentor from '../views/Mentor.vue'
import Skill from '../views/Skill.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'About Javascript' }
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenge,
    meta: { title: 'About Javascript' }
  },
  {
    path: '/mentors',
    name: 'Mentors',
    component: Mentor,
    meta: { title: 'About Javascript' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skill,
    meta: { title: 'About Javascript' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: 'About Javascript' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
