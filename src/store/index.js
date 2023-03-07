import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    toggle: false,
    join: false,
    identifiants: { login: '', password: '*******', connected: false, acces_token: '' },
    count: 0,
    identifiantsparty: ''
  },
  getters: {
  },
  mutations: {
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
    },
    Mygames (state) {
      const token = state.identifiants.acces_token.access_token
      axios.get('https://naval.laize.pro/board/mygames', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log('mes games :', response)
      }).catch((error) => { console.log(error) })
    },
    Createparty (state) {
      const token = state.identifiants.acces_token.access_token
      axios.get('https://naval.laize.pro/board', {
        headers: { Authorization: `bearer ${token}` }
      }).then((reponse) => {
        console.log(reponse)
      })
    },
    join (state, list) {
      const token = state.identifiants.acces_token.access_token
      console.log('store', list)
      state.identifiantsparty = list
      axios.get('https://naval.laize.pro/board/' + list.id + '/join', {
        headers: { Authorization: `bearer ${token}` }
      }).then((response) => {
        console.log(response, 'A REJOINT')
        state.join = true
      }).catch((error) => {
        console.log(error, 'COMPLET')
      })
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
        alert('Connection Réussie !')
      }).catch((erreur) => {
        console.log(erreur)
        context.commit('LoginFail', identifiants)
      })
    }
  },
  modules: {

  }
})

// FAIS

// ETAPE 1 CREER UN BOUTON SE CONNECTER EN HAUR A DROIT
// ETAPE 2 : QUAND JE CLIC SUR LE BOUTON SE CONNECTER M'AFFICHE LE FORMULAIRE DE CONNECTION EN BAS A DROIT DU BOUTON DE LECRAN MAIS PAR DESUSS TOUT
// ET SI JE SCROLL EN BAS, LE FORMULAIRE ME SUIT
// ETAPE 3 : LA NAVBAR ( BOUTIQUE, ECT...) ENLEVER LA "BOUTIQUE" ET REMPLACER PAR "LOBBY" et "MES PARTIES" QUI SAFFICHE UNIQUEMENT SI TES CONNECTER
// (( LOBBY DOIS FONCTIONER et la page mes parties dois etre une page vite fais sans fonctionner ( a voir plus tard )))
// ETAPE 4 : DANS LA PAGE "LOBBY" le bouton rejoindre dois rejoindre une partie avec les API ( Requete dans le store )
// METTRE UNE CROIX QUI FERME LE FORMULAIRE
// ETAPE 5 : AVOIR LA LISTE DE MES PARTIES DANS MES PARTIES
// BONUS: RESET PARTY
// ETAPE 5-1 : CREER UN BOUTON "CREER PARTIE" AVEC UNE PAGE DE CREATION DE PARTIE ET DEDANS UN FORMULAIRE QUI VA CONTENIR
// UN CHAMPS INPUT OU JE PEUT CREER DES BATEAUX ET CHANGER LEURS TAILLES (TAILLE : entre 2 à 5 cases )
// ETAPE 6 : AVOIR UNE ROUTE ET UNE PAGE "/board/:ID" ( ID DOIS ETRE L'ID D'UNE PARTIE)
// ETAPE 7 : RECUPERER LES INFOS DE LA PARTIE PARTIE ET LAFFICHER

// PAS FAIS

// ETAPE 4-1 : QUAND JE CLIC SUR LE BOUTON REJOINDRE LE TEXTE SE REMPLACE PAR UN "LOADER", SI JARRIVE A REJOINDRE
// REMPLACE LE BOUTON REJOINDRE A "A REJOINT" ET SI JY ARRIVE PAS REMPLACE LE BOUTON "REJOINDRE" PAR "COMPLET"

// ESTIMATION

// JUSQUA VENDREDI PROCHAIN POUR LETAPE 7
