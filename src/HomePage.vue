<!-- eslint-disable vue/valid-v-on -->
<template>
    <div class="container-header">
        <div class="header">
            <h1>Bataille Navale</h1>
            <h2>Jouez en ligne contre vos amis !</h2>
            <h3>Placez vos bateaux, Coulez les bateaux ennemis !</h3>
        </div>
            <HomeComponent @click="register()"  v-bind:img="footer" buttonTitle="S'inscrire"/>
            <HomeComponent @click="connect()" v-bind:img="footer2" buttonTitle="Se Connecter !" />
            <HomeComponent @click="lost()" v-bind:img="body" buttonTitle="Mot de passe oublier" />
    </div>
</template>

<script>
import HomeComponent from './HomeComponent.vue'
import footer2 from './assets/footer2.png'
import footer from './assets/footer.png'
import body from './assets/body.png'

export default {
  components: {
    HomeComponent
  },
  data () {
    return {
      token: '',
      footer2,
      footer,
      body
    }
  },
  methods: {
    connect () {
      console.log('home')
      this.$router.push('/connect')
    },
    register () {
      console.log('home')
      this.$router.push('/register')
    },
    lost () {
      this.$router.push('/lost')
    }
  }
}
</script>

<style>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');

    h1, h2, h3{
        padding-top:5px;
        color: black(255, 217, 0);
        font-family: 'Pirate Ship', sans-serif;
        font-size:15px;
        text-shadow: 2px 2px 16px rgba(0,0,0,1);
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
    html{
    background-image: url(assets/home.jpg);
    background-size: cover;
}

</style>
