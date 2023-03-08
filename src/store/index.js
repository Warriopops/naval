import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    toggle: false,
    join: false,
    identifiants: { login: '', password: '*******', connected: false, acces_token: '' },
    count: 0,
    identifiantsParty: '',
    mesPartiesEnCours: []
  },
  getters: {
  },
  mutations: {
    save () {
      const test = JSON.parse(localStorage.getItem('identifiants'))
      console.log(test)
    },
    LoginSuccess (state, token) {
      state.identifiants.connected = true
      state.identifiants.acces_token = token
      localStorage.setItem('token', token)
      console.log('réussie :', state.identifiants)
    },
    LoginFail (state) {
      state.identifiants.connected = false
      console.log('fail :', state.identifiants)
    },
    Login (state, identifiants) {
      state.identifiants.login = identifiants.login
    }
  },
  actions: {
    Login (context, identifiants) {
      context.commit('Login', identifiants)
      axios.post('https://naval.laize.pro/user/login', {
        login: identifiants.login,
        password: identifiants.password
      }).then((reponse) => {
        console.log(reponse)
        const token = reponse.data
        context.commit('LoginSuccess', token)
        context.dispatch('')
        alert('Connection Réussie !')
      }).catch((erreur) => {
        console.log(erreur)
        context.commit('LoginFail', identifiants)
      })
    },
    Mygames ({ state }) {
      const token = state.identifiants.acces_token.access_token
      axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log('mes games :', response)
      }).catch((error) => { console.log(error) })
    },
    Createparty ({ state }) {
      const token = state.identifiants.acces_token.access_token
      axios.get('https://naval.laize.pro/board', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse)
      })
    },
    join ({ state }, list) {
      const token = state.identifiants.acces_token.access_token
      console.log('store', list)
      state.identifiantsParty = list
      axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.join = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
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

// FAIRE DE LORDRE, COMPONENTS, NOM, NETTOYAGE
// METTRE DES CURSEURS AU CLIC
// RANGER STORE ( REQUETTE DANS ACTIONS)

// A FAIRE

// CREER UN COMPOSANT NAVBAR ET LE METTRE DANS LES AUTRES PAGES
// SAUVEGARDER LE STORE DANS LE LOCALSTORAGE et récuperer
// QUAND JE SUIS SUR UNE PARTIE AVEC LES INFOS POUVOIR RECHARGER LA PAGE
// SAUVEGARDER URL DANS LES INFOS DE LA PARTIE POUR POUVOIR "SAUVEGARDER" LES INFOMARTIONS
// AVOIR UN COMPOSANT PLATEAUX DE JEUX 10 Hauteur x 8 Largeur ( sympa mais vraiment simple GRID X DIV )
