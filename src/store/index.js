import Vuex from 'vuex'
import Vue from 'vue'
import appInfo from './hello'
import userInfo from './user'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    appInfo,
    userInfo
  }
})

export default store
