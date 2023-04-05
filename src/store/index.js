import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    joinGame: false,
    identifiants: { login: '', password: '*******', connected: false, access_token: '' },
    myGames: null,
    partyLoaded: false,
    gamesLobby: [],
    gamesInfos: null,
    gamesInfosLoaded: false,
    registerFail: null,
    myGamesLoaded: false
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
      state.myGamesLoaded = true

    }
  },
  actions: {
    save(context) {
      console.log('context', context.state.identifiants)
      const save = JSON.stringify(context.state.identifiants)
      localStorage.setItem('identifiants', save)
    },
    load({ commit }) {
      if (localStorage.getItem('identifiants') === null)
        return;

      const data = JSON.parse(localStorage.getItem('identifiants'))
      commit('loadData', data)
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
    createParty({ state }, board) {
      const token = state.identifiants.access_token.access_token
      console.log(state)
      console.log('store', board)
      axios.post('https://naval.laize.pro/board/', {
        "ships": [2, 3, 3, 4, 4]
      },
        {
          headers: { Authorization: `bearer ${token}` }

        }).then((reponse) => {
          console.log("reussi", reponse)
        }).catch((error) => {
          console.log(error)
        })
    },
    join({ state }, list) {
      const token = state.identifiants.access_token.access_token
      const promesse = axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.joinGame = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
      });
      return promesse;
    },
    register({ state }, identifiants) {
      const promesse = axios.post('https://naval.laize.pro/user/signup', {
        login: identifiants.pseudo,
        password: identifiants.password
      }).then((response) => {
        console.log(response)
        state.registerFail = true
      }).catch((error) => {
        console.log(error)
        state.registerFail = false
      })
      return promesse
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
  },
  modules: {

  }
})

//FAIS
// FAIRE DU MENAGE DANS LE STORE et partout (props, nom de variable, event qui s'appelle event, etc.)
// REFAIRE UNE PAGE D'INSCRIPTION ( FINIR AVEC PROMESSE )

// A FAIRE


// Plateau => Changer le for recursif par un seul v-for et compléter les deux methods
// Plateau => au clic sur une case, afficher un console.log de la position cliqué (cliqué à x/y)
// Creation de partie => Mettre les meme bateaux par défaut que sur le swagger ( API )

// CREATIONS DE PARTIE AVEC /POST BOARD ( SHIPS = LISTE DE BATEAUX)

// PLACEMENT DE BATEAUX

// TABLEAU  ET MYGAMES EN COMPONENT QUI DOIS PRENDRE 2 PARAMETRE( LISTE D'OBJETS & un tableau de string qui correspong aux clefs)
  // 1/ Utiliser comme paramètre un array d'objet comme suit :
  // [{id: "fafafa-aaaa", game_status: "blabl", user: {login: "maxoux"}}]
  // [{label: "Id de la partie", key: "id"}, {label: "Status du Match", key: "game_status"}]
  // 2/ LE composant doit utiliser les scope pour afficher les boutons rejoindre (Les boutons doivent etre ecris dans le parent)

// DANS MYGAMES PAS DE "VOUS" mais un boutton rejoindre, pas de numéro de lobby mais une date au hasard


