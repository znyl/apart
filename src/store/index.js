import { createStore } from 'vuex'

export default createStore({
  state: {
    addModal: null,
  },
  mutations: {
    TOGGLE_MODAL(state){
      state.addModal = !state.addModal
    }
  },
  actions: {
  },
  modules: {
  }
})
