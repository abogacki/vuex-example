import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '@/components/views/AboutView'
import HomeView from '@/components/views/HomeView'
import TodoDetailsView from '@/components/views/TodoDetailsView'

Vue.use(VueRouter)

const routes = [
  { path: '/about', component: AboutView },
  { path: '/', component: HomeView },
  { path: '/details/:id', component: TodoDetailsView },
]

export default new VueRouter({ routes })
