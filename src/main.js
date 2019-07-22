import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faDirections,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
import router from '@/router/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt, faDirections, faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
