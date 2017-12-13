import sampleApi from '../../api/sampleApi'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  users: [],
  checkoutStatus: null,
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  async findAllUsers ({ commit, state }) {
    try{
      const allusers = await sampleApi.findAllUsers()
      commit(types.FIND_ALL_USERS, allusers)
    }catch(e){
      commit(types.FIND_ALL_USERS_FAILURE)

    }
  }
}

// mutations
const mutations = {
  [types.FIND_ALL_USERS] (state, allusers) {
    state.users = allusers
  },

  [types.FIND_ALL_USERS_REQUEST] (state) {
    state.users = []
    state.checkoutStatus = null
  },

  [types.FIND_ALL_USERS_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.FIND_ALL_USERS_FAILURE] (state) {
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
