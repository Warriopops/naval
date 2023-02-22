<template>
  <div class="container-header">
    <h1>LOBBY</h1>
    <div class="test">
      <h2>LOBBY</h2>
      <h2>JOUEURS</h2>
      <h2>STATUS DU MATCH</h2>
      <h2>BOUTTON</h2>
    </div>
        <div :key="index" v-for="(FiltreWaintingPlayer, index) in FiltreWaintingPlayer">
          <div class="container-partie" v-if="index <= limite" >
            <h3>{{ index }}</h3>
            <h3>{{ FiltreWaintingPlayer.host.login }}</h3>
            <h3>EN ATTENTE</h3>
            <input type="button" class="join" value="REJOINDRE">
          </div>
        </div>
        <div :key="index" v-for="(FiltrePlayingPlayer, index) in FiltrePlayingPlayer">
          <div class="container-partie" v-if="20 + index <= limite" >
            <h3>{{ 20 + index }}</h3>
            <h3>{{ FiltrePlayingPlayer.host.login }} Vs {{ FiltrePlayingPlayer.guest.login }}</h3>
            <h3>EN COURS</h3>
            <h2>COMPLET</h2>
          </div>
        </div>
      <input type="button" class="favorite styled" @click="back" value="Retour">
      <input type="button" class="favorite styled" value="Match Précedent">
      <input type="button" class="favorite styled" value="Match Suivant">
  </div>
</template>

<script>
import footer2 from './assets/footer2.png'
import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      limite: 9,
      footer2,
      partie: null,
      FiltrePlayingPlayer: [],
      FiltreWaintingPlayer: []
    }
  },
  mounted () {
    axios
      .get('https://naval.laize.pro/board')
      .then((reponse) => {
        this.partie = reponse.data
        this.partie.sort(function (b, a) {
          return a.board_status.localeCompare(b.board_status)
        })
        this.FiltreWaintingPlayer = this.partie.filter(obj => obj.board_status !== 'PLAYING')
        this.FiltrePlayingPlayer = this.partie.filter(obj => obj.board_status === 'PLAYING')
        console.log('filtre joueurs en attente :')
        console.log('filtre joueurs en jeu :')
        console.log('partie')
      })
  },
  methods: {
    suivant () {
      this.limite = 10
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');
    h1{
        color:rgb(250, 250, 250);
        text-decoration:underline;
        font-size:30px;
        margin-bottom:30px;
        height:20px;
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
    .container-partie h2{
      color:red;
    }
    .styled, .join {
    margin-top:5px;
    border: 0;
    width:200px;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgb(169, 0, 0);
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);
    }
    .join{
      width:100px;
      font-size:10px;
      height:70%;
      margin-top:5px;
    }

    .styled:hover , .join:hover{
    background-color: rgba(255, 0, 0, 1);
    }

    .styled:active , .join:active{
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }
    .container-partie{
        display: grid;
        grid-template-columns: repeat(4, 100px);
        justify-content: space-between;
        vertical-align: center;
        margin-right:30px;
        margin-left:30px;
        background-color:rgb(72, 72, 72);
        border-radius: 0px 0px 0px 0px;
        -moz-border-radius: 0px 0px 0px 0px;
        -webkit-border-radius: 0px 0px 0px 0px;
        border: 1px solid #000000;
    }
    .test{
      display: grid;
      grid-template-columns: repeat(4,100px);
      justify-content:space-between;
      margin-right:30px;
      margin-left:30px;
      background-color:grey;
      border-radius: 0px 0px 0px 0px;
        -moz-border-radius: 0px 0px 0px 0px;
        -webkit-border-radius: 0px 0px 0px 0px;
        border: 1px solid #000000;
    }
    h2{
        font-size:11px;
        color:rgb(223, 197, 0);
    }
    h3{
      font-size:11px;
      color:rgb(221, 221, 221);
    }
    h4{
      font-size:14px;
      color:red;
    }

</style>
