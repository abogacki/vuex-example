import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '@/components/views/AboutView'
import HomeView from '@/components/views/HomeView'

Vue.use(VueRouter)

const routes = [
  { path: '/about', component: AboutView },
  { path: '/', component: HomeView },
]

export default new VueRouter({ routes })
