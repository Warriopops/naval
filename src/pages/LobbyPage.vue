<template>
  <div class="container-header">
    <div class="heeader">
      <div class="logo">
        <img src="@/assets/kisspng-pirate-ship-two-dimensional-space-animation-2d-com-pirate-5abcf8579a4816.467935311522333783632.png">
      </div>
      <h1>LOBBY</h1>
      <div class="logo">
        <img src="@/assets/kisspng-pirate-ship-two-dimensional-space-animation-2d-com-pirate-5abcf8579a4816.467935311522333783632.png">
      </div>
    </div>
    <div class="navbar">
      <navbar/>
    </div>
    <div class="createParty">
      <buttonComponent msg="Créer une partie" @click="createParty"></buttonComponent>
    </div>
    <div class="test">
      <h2>LOBBY</h2>
      <h2>HOTE</h2>
      <h2>JOUEUR</h2>
      <h2>STATUS DU MATCH</h2>
      <h2>BOUTTON</h2>
    </div>
    <div
      v-if="partyLoaded == false"
      class="loading"
    >
      <h2>CHARGEMENT DES LOBBYS</h2>
      <div class="half-circle-spinner">
        <div class="circle circle-1" />
        <div class="circle circle-2" />
      </div>
    </div>
    <div
      v-for="(list, index) in listeOrdered"
      :key="index"
      class="testo"
    >
      <div v-if=" index < limite">
        <div
          v-if="list.guest == null"
          class="container-partie"
        >
          <h3>{{ index }}</h3>
          <h3>{{ list.host.login }}</h3>
          <h3>INCONNU</h3>
          <h3>EN ATTENTE</h3>
          <div class="buttonJoin">
            <buttonComponent msg="Rejoindre" class="componentJoinParty" @click="join(index)"></buttonComponent>
          </div>
        </div>
        <div
          v-if="list.guest != null"
          class="container-partie"
        >
          <h3>{{ index }}</h3>
          <h3>{{ list.host.login }}</h3>
          <h3>{{ list.guest.login }}</h3>
          <h3>EN COURS</h3>
          <h4>COMPLET</h4>
        </div>
      </div>
    </div>
    <div class="button-container">
      <buttonComponent msg="Retour" @click="back"></buttonComponent>
      <buttonComponent msg="Match Précedent" @click="audio"></buttonComponent>
      <buttonComponent msg="Match Suivant" @click="audio"></buttonComponent>
      <buttonComponent msg="Raffraichir" @click="refresh"></buttonComponent>
    </div>
    <audio
      id="your-audio"
      preload="metadata"
    >
      <source
        src="@/assets/cloche.mp3"
        type="audio/mpeg"
      >
      <source
        src="@/assets/cloche.mp3"
        type="audio/wav"
      >
      <source
        src="@/assets/cloche.mp3"
        type="audio/ogg; codecs=vorbis"
      >
    </audio>
  </div>
</template>

<script>
  import footer2 from '@/assets/footer2.png'
  import navbar from '@/components/NavbarComponent.vue'
  import { mapState } from 'vuex'
  import buttonComponent from '@/components/ButtonComponent.vue'

  export default {

    components: {
      navbar,
      buttonComponent
    },
    data () {
      return {
        limite: 30,
        footer2,
        list: [],
        sortBy: 'board_status',
        sortDirection: 'asc'
      }
    },
    mounted () {
      this.$store.dispatch('loadingParty')
    },
    computed: {
      ...mapState({
        gamesLobby: 'gamesLobby',
        partyLoaded: 'partyLoaded'
      }),
      listeOrdered () {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.gamesLobby.sort((p2, p1) => {
          let modifier = 1
          if (this.sortDirection === 'desc') modifier = -1
          if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier
          if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier
          this.list = this.gamesLobby
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
      },
      join (index) {
        const list = this.list[index]
        const join = this.$store.dispatch('join', list).then(() => {
          this.$router.push('/board/' + list.id)
        })
      },
      createParty () {
        this.$router.push('/createparty')
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
        height:90%;
        width:100%;
        margin-top:5px;
        background-size:cover;
        padding-left:0px;
    }
    .container-partie h2{
      color:red;
    }
    .container-partie{
        display: grid;
        grid-template-columns: repeat(5, 100px);
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
      grid-template-columns: repeat(5,100px);
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
      margin-left:500px;
      margin-right:30px;
      font-size:30px;
      color:black
    }
    .logo img{
      width:80px;
      height:80px;
      margin-right:10px;
    }
    .heeader{
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
      margin-right:10px;
    }
    .button-container{
      display:flex;
      flex-direction:row;
      height:60px;
      justify-content: space-around;
      background-color:grey;
      border: 1px solid #000000;
      width:1458px;
      margin-left:30px;
    }
    .navbar{
      margin-top:20px;
      margin-bottom:10px;
    }
    .createParty{
      margin-bottom:10px;
    }
    .componentJoinParty{
      height:50px;
    }
</style>
