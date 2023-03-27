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
      state.gamesinfosloaded = false
      state.gamesInfos = reponse
      state.gamesinfosloaded = true
    },
    gameinformationfalse(state) {
      state.gamesinfosloaded = false
      state.gamesInfos = "Vous n'avez pas accès à cette partie"
      state.gamesinfosloaded = true
    },
    mygame(state, reponse) {
      state.myGames = reponse

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
        const token = reponse.data
        context.commit('LoginSuccess', token)
        context.dispatch('save')
      }).catch((erreur) => {
        context.commit('LoginFail', identifiants)
      })
    },
    Mygames({ state, commit }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse.data)
        commit('mygame', reponse.data)
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
    gameinfo({ state, commit }) {
      state.gamesInfos = ""
      const url = window.location.href
      const boardId = url.substring(url.lastIndexOf('board') + 6)
      const token = state.identifiants.access_token.access_token
      console.log(url)
      console.log('https://naval.laize.pro/board/' + boardId)
      console.log(token)
      axios
        .get('https://naval.laize.pro/board/' + boardId, {
          headers: { Authorization: `bearer ${token}` }
        })
        .then((reponse) => {
          commit('gameinformation', reponse.data)
        }).catch((reponse) => {
          console.log('test', reponse)
          commit('gameinformationfalse', reponse.data)
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

//FAIS


// A FAIRE
// CHANGER GAMESINFOS ( ca envoie le board AVANT de rejoindre)
// CHANGEZ LES BOUTONS EN DUR DANS LE LOBBY ET EN FAIRE DES COMPONENTS
// CHANGEZ MYGAMES ET FAIRE COMME LE LOBBY
// QUAND JE REGARDE LE BOARD OU CA FAIS ERREUR 403 AFFICHE UNE ERREUR EN DISANT QUE JE NAI PAS ACCES A CETTE PARTIE
// CHANGER TOGGLE CONNECT EN PROPS AU LIEU D UTILISER LE STORE
// FAIRE DU MENAGE DANS LE STORE
// CORRIGER LE PLATEAUX EN 2 V-FOR AU LIEU DU WHILE
// MEILLEUR CREATIONS DE BATEAUX, AVOIR UNE LISTE DE BATEAUX AVEC CREER, AJOUTER ET MODIFIER
// CREATIONS DE BATEAUX AVEC /POST BOARD ( SHIPS = LISTE DE BATEAUX)
// PLACEMENT DE BATEAUX
