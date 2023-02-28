import { createStore } from 'vuex'

export default createStore({
  state: {
    identifiants: { login: '', password: '', connected: false, acces_token: '' }
  },
  getters: {
  },
  mutations: {
    Login (state, identifiants) {
      state.identifiants.login = identifiants.login
      state.identifiants.password = identifiants.password
    },
    LoginSuccess (state, token) {
      state.identifiants.connected = true
      state.identifiants.acces_token = token
      console.log('réussie :', state.identifiants)
    },
    LoginFail (state) {
      state.identifiants.connected = false
      console.log('fail :', state.identifiants)
    }
  },
  actions: {
  },
  modules: {

  }
})
