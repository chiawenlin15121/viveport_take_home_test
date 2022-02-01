import dataSource from "../../assets/park_data_source.json"
import ParkDetail from "../../models/ParkDetail"

const state = () => ({
  list: [],
})

// getters
const getters = {
  detail: (state) => (parkId) => state.list[parkId]
}

// actions
const actions = {
  loadParks: ({
    commit
  }) => {
    const parks = dataSource.map(
      (parkJSON, index) => new ParkDetail({ ...parkJSON, id: index })
    )
    commit('setParks', parks)
  },
}

// mutations
const mutations = {
  setParks(state, parks){
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