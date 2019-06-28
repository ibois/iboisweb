export const state = () => ({
  list: []
})

export const mutations = {
  add(state, member) {
    state.list.push(member)
  },
  emptyList(state) {
    state.list = []
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}
