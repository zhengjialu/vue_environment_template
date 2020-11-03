const store = {
  namespaced: true,
  state: {
    helloContent: 'xxxx'
  },
  mutations: {
    increment(state) {
      state.helloContent = 'hello'
    }
  }
}

export default store
