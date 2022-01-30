const state = () => ({
  list: [],
})

// getters
const getters = {
  
}

// actions
const actions = {
  setParks: ({
    commit
  }, parks) => {
    commit('setParks', parks)
  },
}

// mutations
const mutations = {
  setParks(state, parks) {
    state.list = parks
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}