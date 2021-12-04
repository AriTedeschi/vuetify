import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Challenge from '../views/Challenge.vue'
import Mentor from '../views/Mentor.vue'
import Skill from '../views/Skill.vue'
import Profile from '../views/Profile.vue'
import Location from '../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenge,
  },
  {
    path: '/mentors',
    name: 'Mentors',
    component: Mentor,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skill,
  },
  {
    path: '/locations',
    name: 'locations',
    component: Location,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
