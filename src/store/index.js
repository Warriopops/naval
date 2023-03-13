import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    toggle: false,
    join: false,
    identifiants: { login: '', password: '*******', connected: false, access_token: '' },
    identifiantsParty: '',
    myGames: [],
    partyLoaded: false,
    gamesLobby: []
  },
  getters: {
  },
  mutations: {
    // loadToState(state, storeSaved) {

    LoginSuccess (state, token) {
      state.identifiants.connected = true
      state.identifiants.access_token = token
    },
    LoginFail (state) {
      state.identifiants.connected = false
    },
    Login (state, identifiants) {
      state.identifiants.login = identifiants.login
    },
    Load_data (state, load) {
      Object.assign(state, load)
    },
    partyloaded (state, reponse) {
      state.gamesLobby = reponse
      state.partyLoaded = true
    }
  },
  actions: {
    save (state) {
      const save = JSON.stringify(state)
      localStorage.setItem('identifiants', save)
    },
    load ({ commit }) {
      const data = JSON.parse(localStorage.getItem('identifiants'))
      commit('Load_data', data)
    },
    Login (context, identifiants) {
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
    Mygames ({ state }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        state.myGames = response.data
      }).catch((error) => { console.log(error) })
    },
    Createparty ({ state }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse)
      })
    },
    join ({ state }, list) {
      const token = state.identifiants.access_token.access_token
      console.log('store', list)
      state.identifiantsParty = list
      console.log(list)
      axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.join = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
      })
    },
    register (state, identifiants) {
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
    loadingparty (context) {
      axios
        .get('https://naval.laize.pro/board')
        .then((reponse) => {
          context.commit('partyloaded', reponse.data)
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
// CORRIGER CURSEUR AU CLIC
// acces token = access token
// NETTOYAGE DES COMPOSANTS AVEC LA LOUPE
// CONSOLE.LOG = RAJOUTER DES STRINGS POUR SAVOIR CE QUE C
// METTRE REQUETES DANS LE STORE ( aide toi de la loupe + cherche axios )

// A FAIRE

// SAUVEGARDER LE STORE DANS LE LOCALSTORAGE et récuperer ( LOADING ET SAVE + LOADING DANS APP AVEC MOUNTED)
// MODIFIER GAMEINFOS
// METTRE UNE BOUCLE DANS LA PAGE PLATEAUX AU LIEU DE 50 DIV
