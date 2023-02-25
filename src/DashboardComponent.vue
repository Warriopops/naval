<template>
  <div class="container-header">
    <audio controls autoplay="true" volume="0.2" loop="true">
        <source src="./assets/musique.mp3" type="audio/mpeg">
        <source src="./assets/musique.mp3" type="audio/wav">
        <source src="./assets/musique.mp3" type="audio/ogg; codecs=vorbis">
      </audio>
    <h1>LOBBY</h1>
    <div class="test">
      <h2>LOBBY</h2>
      <h2>JOUEURS</h2>
      <h2>STATUS DU MATCH</h2>
      <h2>BOUTTON</h2>
    </div>
    <div class="loading" v-if="!isloaded">
        <h2>CHARGEMENT DES LOBBYS</h2>
      <div class="half-circle-spinner">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      </div>
      </div>
        <div class="testo" :key="index" v-for="(list, index) in listeOrdered">
          <div  v-if=" index < limite" >
            <div v-if="list.guest == null" class="container-partie">
              <h3>{{ index }}</h3>
              <h3>{{ list.host.login }}</h3>
              <h3>EN ATTENTE</h3>
              <input type="button" class="join" @click="audio" value="REJOINDRE">
            </div>
            <div v-if="list.guest != null" class="container-partie">
              <h3>{{ index }}</h3>
              <h3>{{ list.host.login }} VS {{ list.guest.login }}</h3>
              <h3>EN COURS</h3>
              <h4>COMPLET</h4>
            </div>
          </div>
        </div>
      <input type="button" class="favorite styled" @click="back" value="Retour">
      <input type="button" class="favorite styled" @click="audio()" value="Match Précedent">
      <input type="button" class="favorite styled" @click="audio" value="Match Suivant">
      <input type="button" class="favorite styled" @click="refresh" value="Raffraichir">
      <audio preload="metadata" id="your-audio">
        <source src="./assets/cloche.mp3" type="audio/mpeg">
        <source src="./assets/cloche.mp3" type="audio/wav">
        <source src="./assets/cloche.mp3" type="audio/ogg; codecs=vorbis">
      </audio>
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
      limite: 10,
      footer2,
      list: [],
      sortBy: 'board_status',
      sortDirection: 'asc',
      isloaded: false
    }
  },
  mounted () {
    axios
      .get('https://naval.laize.pro/board')
      .then((reponse) => {
        this.list = reponse.data
        this.isloaded = true
      })
  },
  computed: {
    listeOrdered () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.list.sort((p2, p1) => {
        let modifier = 1
        if (this.sortDirection === 'desc') modifier = -1
        if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier
        if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier
        return 0
      })
    }
  },
  methods: {
    refresh () {
      const yourAudio = document.getElementById('your-audio')
      yourAudio.play()
      location.reload()
    },
    back () {
      const yourAudio = document.getElementById('your-audio')
      yourAudio.play()
      this.$router.push('/')
    },
    audio () {
      const yourAudio = document.getElementById('your-audio')
      yourAudio.play()
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
    width:150px;
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
      width:95px;
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
    .half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: relative;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;

    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: black;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: black;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }
    .loading{
      display: flex;
      flex-direction: row;
      align-items:center;
      margin-top:150px;
      margin-bottom:210px;
    }
    .loading h2{
      margin-left:70px;
      margin-right:30px;
      font-size:30px;
      color:black
    }

</style>
