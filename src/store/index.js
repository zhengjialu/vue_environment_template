import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const state = {
  count: 0,
  globalContent: 'Hello'
}

// 全局 store 仓库
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})

export default store