import io from './io'

const store = {
  namespaced: true,
  state: {
    helloContent: 'xxxx'
  },
  mutations: {
    increment(state) {
      state.helloContent = 'hello'
    },
    testIo: async () => {
      try {
        const {content} = await io.testIo({
          ':id': 11,
        })
        // this.state.helloContent = content.name
        console.log(content)
      } catch(e) {
        // message.error(e.message)
      }
    }
  }
}

export default store
