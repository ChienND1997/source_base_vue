import axios from '../../common/api/axios.js'

import { SET_ME } from '../mutation-types'

const state = () => {
  return {
    me: null
  }
}

const getters = {
  getMe: state => {
    return state.me
  }
}

const mutations = {
  [SET_ME] (state, me) {
    state.me = me
  }
}

const actions = {
  async setMe (context) {
    let res = await axios.get('/ChienND1997/OPTiM/master/menuItem.json')
    context.commit([SET_ME], res.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
