const appInfo = {
  state: {
    numValue: 100000000
  },
  getters: {

  },
  mutations: {
    increment(state, num) {
      state.numValue += num;
    },
    decrement(state, num) {
      state.numValue -= num;
    }
  },
  actions: {
    add(context, obj) {
      context.commit('increment', 2)
      console.log(obj)
    },
    decre(context) {
      context.commit('decrement', 1)
    }
  }
}
export default appInfo
