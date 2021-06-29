import Vue from 'vue'
import Vuex from 'vuex'

import me from './modules/me'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    me
  }
})