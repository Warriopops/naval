import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    join: false,
    identifiants: { login: '', password: '*******', connected: false, access_token: '' },
    test: 'lol',
    myGames: null,
    partyLoaded: false,
    gamesLobby: [],
    gamesInfos: null,
    gamesInfosLoaded: false
  },
  getters: {
  },
  mutations: {
    // loadToState(state, storeSaved) {

    loginSuccess(state, token) {
      state.identifiants.connected = true
      state.identifiants.access_token = token
    },
    loginFail(state) {
      state.identifiants.connected = false
    },
    login(state, identifiants) {
      state.identifiants.login = identifiants.login
    },
    loadData(state, data) {
      state.identifiants = data
    },
    partyLoaded(state, reponse) {
      state.gamesLobby = reponse
      state.partyLoaded = true
    },
    gameInfoLoading(state) {
      state.gamesInfosLoaded = false;
    },
    gameInformationSuccess(state, reponse) {
      state.gamesInfos = reponse
      state.gamesInfosLoaded = true
    },
    gameInformationFailed(state) {
      state.gamesInfosLoaded = false
      state.gamesInfos = "Vous n'avez pas accès à cette partie"
      state.gamesInfosLoaded = true
    },
    myGame(state, reponse) {
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
        commit('loadData', data)
      }
    },
    login(context, identifiants) {
      context.commit('login', identifiants)
      axios.post('https://naval.laize.pro/user/login', {
        login: identifiants.login,
        password: identifiants.password
      }).then((reponse) => {
        const token = reponse.data
        context.commit('loginSuccess', token)
        context.dispatch('save')
      }).catch((erreur) => {
        context.commit('loginFail', identifiants)
      })
    },
    myGames({ state, commit }) {
      const token = state.identifiants.access_token.access_token
      const promesse = axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse.data)
        commit('myGame', reponse.data)
      }).catch((error) => { console.log(error) })
      return promesse
    },
    CreateParty({ state }) {
      const token = state.identifiants.access_token.access_token
      axios.get('https://naval.laize.pro/board', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse)
      })
    },
    join({ state }, list) {
      const token = state.identifiants.access_token.access_token
      const promesse = axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.join = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
      });
      return promesse;
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
    loadingParty(context) {
      axios
        .get('https://naval.laize.pro/board')
        .then((reponse) => {
          context.commit('partyLoaded', reponse.data)
        })
    },
    getGameInfo({ state, commit }) {
      const url = window.location.href
      const boardId = url.substring(url.lastIndexOf('board') + 6)
      const token = state.identifiants.access_token.access_token
      commit('gameInfoLoading');
      axios
        .get('https://naval.laize.pro/board/' + boardId, {
          headers: { Authorization: `bearer ${token}` }
        })
        .then((reponse) => {
          commit('gameInformationSuccess', reponse.data)
        }).catch((reponse) => {
          commit('gameInformationFailed', reponse.data)
        })
    },
    createParty(state, board) {
      console.log(state)
      console.log('store', board)
    }
  },
  modules: {

  }
})

//FAIS
// CHANGER TOGGLE CONNECT EN PROPS AU LIEU D UTILISER LE STORE
// MYGAMES SE CHARGE
// CHANGER GAMESINFOS ( ca envoie le board AVANT de rejoindre)
// CHANGEZ LES BOUTONS EN DUR DANS LE LOBBY ET EN FAIRE DES COMPONENTS
// CORRIGER LE PLATEAUX EN 2 V-FOR AU LIEU DU WHILE
// FAIRE DU MENAGE SUR LES NOMS DANS LE PLATEAU
// FAIRE DU MENAGE DANS LE STORE
// CHANGEZ MYGAMES ET FAIRE COMME LE LOBBY
// MEILLEUR CREATIONS DE BATEAUX, AVOIR UNE LISTE DE BATEAUX AVEC CREER, AJOUTER ET MODIFIER
// REGLER LE PROBLEME DE BOUTONS DANS LE LOBBY
// CREER UN BOUTON DECONNEXION

// A FAIRE
// CREATIONS DE BATEAUX AVEC /POST BOARD ( SHIPS = LISTE DE BATEAUX)
// PLACEMENT DE BATEAUX

// PAS A FAIRE
// QUAND JE REGARDE LE BOARD OU CA FAIS ERREUR 403 AFFICHE UNE ERREUR EN DISANT QUE JE NAI PAS ACCES A CETTE PARTIE ( plus d'erreurs 403)


