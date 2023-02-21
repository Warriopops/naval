<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="container-header">
        <div class="header">
            <h1>Bataille Navale</h1>
            <h2>Jouez en ligne contre vos amis !</h2>
            <h3>Placez vos bateaux, Coulez les bateaux ennemis !</h3>
        </div>
            <formulaire v-bind:img="footer2"  title="Inscrit toi !" buttonTitle="S'inscrire" @submit="register"/>
            <formulaire v-bind:img="footer2"  title="Connecte toi !" buttonTitle="Se Connecter !" @submit="login" />
            <formulaire v-bind:img="footer2"  title="Mot de passe oublier" buttonTitle="Mot de passe oublier" @submit="toto" />
            <h3>Ton token est : {{ token }}</h3>

    </div>
    <nav>
      <router-link to="/">Acceuil</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <home/>
</template>

<script>
import home from './HomeCompenent.vue'
import formulaire from './FormulaireComponent.vue'
import axios from 'axios'
import footer2 from './assets/footer2.png'

export default {
  components: {
    home,
    formulaire
  },
  data () {
    return {
      token: '',
      footer2
    }
  },
  methods: {
    toto (pseudo, password) {
      console.log('Toto est appelé')
      console.log('consolelog3', pseudo, password)
    },
    register (pseudo, password) {
      const register = axios.post('https://naval.laize.pro/user/signup', {
        login: pseudo,
        password
      })
      console.log(register)
      console.log(this.todos)
    },
    login (pseudo, password) {
      axios.post('https://naval.laize.pro/user/login', {
        login: pseudo,
        password
      }).then((reponse) => {
        console.log(reponse.data)
        this.token = reponse.data
      })
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');

    h1, h2, h3, h4{
        padding-top:5px;
        color: rgb(255, 217, 0);
        font-family: 'Pirate Ship', sans-serif;
        font-size:15px;
        text-shadow: 2px 2px 16px rgba(0,0,0,1);
    }
    h1, h2, h3{
        color:black;
    }
    .header{
        width:550px;
        height:125px;
        background-size:cover;
        margin-top:20px;
        border-radius:5px 5px 5px 5px;
        background-image:url(assets/header.jpg);
        width:600px;
        height:125px;
        margin-left:0px;
    }
    .container-header{
        width: 600px;
        height:605px;
        -webkit-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        -moz-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        margin: 0 auto;
        padding-top:2px;
        padding-bottom:20px;
        padding-left:10px;
        padding-right:10px;
        background-image:url(assets/carte2.jpg);
        background-size:cover;
    }
    .footer{
        width: 50px;
        height: 50px;
    }
    .connecter{
        background-image:url(./assets/footer.png);
    }
    .mdp{
        background-image:url(./assets/footer2.png);
    }

</style>

<!--
COMPTE LINKEDIN : FAIS
PROBLEME DU TOKEN : FAIS
REMETTRE ESLINT : FAIS
IMG : FAIS

ETAPE 2 : créer une page, quand je clic sur le bouton va sur une autre page sans utiliser HREF mais en
utilisant une librairie appeler vue-router / attention elle s'ajoute pas comme une autre mais il faut la configurer en modifiant
le main.js ect et lire la doc

ETAPE 3 :
    - cRÉER UNE PAGE /connect
    - Déplacer la partie connection/inscriptio sur la page /connect
    - Modifier la page d'acceuil pour avoir que l'accueil
" -->
