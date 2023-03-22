import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    toggle_connect: false,
    join: false,
    identifiants: { login: '', password: '*******', connected: false, access_token: '' },
    identifiantsParty: '',
    test: 'lol',
    myGames: null,
    partyLoaded: false,
    gamesLobby: [],
    gamesInfos: null,
    gamesinfosloaded: false
  },
  getters: {
  },
  mutations: {
    // loadToState(state, storeSaved) {

    LoginSuccess(state, token) {
      state.identifiants.connected = true
      state.identifiants.access_token = token
    },
    LoginFail(state) {
      state.identifiants.connected = false
    },
    Login(state, identifiants) {
      state.identifiants.login = identifiants.login
    },
    Load_data(state, data) {
      state.identifiants = data
    },
    partyloaded(state, reponse) {
      state.gamesLobby = reponse
      state.partyLoaded = true
    },
    gameinformation(state, reponse) {
      state.gamesInfos = reponse
      state.gamesinfosloaded = true
    }
  },
  actions: {
    save(context) {
      console.log('context', context.state.identifiants)
      const save = JSON.stringify(context.state.identifiants)
      localStorage.setItem('identifiants', save)
    },
    load({ commit }) {
      if (localStorage.getItem('identifiants') !== null) {
        const data = JSON.parse(localStorage.getItem('identifiants'))
        commit('Load_data', data)
      }
    },
    Login(context, identifiants) {
      context.commit('Login', identifiants)
      axios.post('https://naval.laize.pro/user/login', {
        login: identifiants.login,
        password: identifiants.password
      }).then((reponse) => {
        console.log(reponse)
        const token = reponse.data
        context.commit('LoginSuccess', token)
        context.dispatch('save')
      }).catch((erreur) => {
        console.log(erreur)
        context.commit('LoginFail', identifiants)
      })
    },
    Mygames({ state }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        state.myGames = response.data
      }).catch((error) => { console.log(error) })
    },
    Createparty({ state }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse)
      })
    },
    join({ state }, list) {
      const token = state.identifiants.access_token.access_token
      state.identifiantsParty = list
      axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.join = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
      })
    },
    register(state, identifiants) {
      console.log(state)
      axios.post('https://naval.laize.pro/user/signup', {
        login: identifiants.pseudo,
        password: identifiants.password
      }).then((response) => {
        console.log('inscription réussis', response)
      }).catch((error) => {
        console.log('erreur d inscription', error)
      })
    },
    loadingparty(context) {
      axios
        .get('https://naval.laize.pro/board')
        .then((reponse) => {
          context.commit('partyloaded', reponse.data)
        })
    },
    gameinfo({ state }, context) {
      const url = window.location.href
      const boardId = url.substring(url.lastIndexOf('board') + 6)
      const token = state.identifiants.access_token.access_token
      console.log('token', token)
      console.log('boardi', boardId)
      axios
        .get('https://naval.laize.pro/board/' + boardId, {
          headers: { Authorization: `bearer ${token}` }
        })
        .then((reponse) => {
          console.log('reponse', reponse)
          context.commit('gameinformation', reponse.data)
        })
    }
    // getParties() {
    //   blabla.then(() => this.commit('parties'));
    // },
    // getMyParties() {
    //   blabla.then(() => this.commit('mesPartiesEnCours'));
    // },
    // joinParty() {
    //   axios.Axios('/join').then(() => {
    //     this.commit('party');
    //     this.dispatch('getMyParties');
    //   })
    // }
  },
  modules: {

  }
})

// FAIS
// FORMULAIRE AVEC LA TOUCHE ENTRER
// CORRIGER CURSEUR AU CLIC METTRE PARTOUT
// TOGGLE SERT A QUOI ? ( LE TOGGLE SERT A FERMER LE FORMULAIRE SE CONNECTER DANS LE HOME PAGE)
// CORRIGER LE PLATEAUX
// SE RENSEIGNER SUR LES MAPSTATE ET LES APPLIQUER A LA PLACE DES STATES
// SAUVEGARDER LE STORE DANS LE LOCALSTORAGE et récuperer ( LOADING ET SAVE + LOADING DANS APP AVEC MOUNTED)
// MODIFIER GAMEINFOS

// A FAIRE
// CORRIGER LINTER
