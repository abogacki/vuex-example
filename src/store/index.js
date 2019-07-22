import Vuex from 'vuex'
import Vue from 'vue'
import todos from '@/store/modules/todos'

// Load vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    todos,
  },
})
