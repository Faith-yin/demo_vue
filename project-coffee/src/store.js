import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: []
  },
  mutations: {
    addGoods(state, value) {
      state.carts.push(value);
    }
  },
  actions: {
    
  },
  getters: {
    
  }
})