/**
 * Created by Administrator on 2017/3/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  token: null,
  // userInfo: {
  //   messages: [{1: 'test', 2: 'test'}],
  //   notifications: [],
  //   tasks: []
  // }
}


const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
}

export default new Vuex.Store({
  state,
  mutations
})
