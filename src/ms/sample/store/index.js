import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
