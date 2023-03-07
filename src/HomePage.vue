<template>
    <div>
        <audio volume="0.2" loop="true">
        <source src="./assets/musique.mp3" type="audio/mpeg">
        <source src="./assets/musique.mp3" type="audio/wav">
        <source src="./assets/musique.mp3" type="audio/ogg; codecs=vorbis">
      </audio>
        <div class="header-container">
            <div class="logo">
                <img src="@/assets/kisspng-pirate-ship-two-dimensional-space-animation-2d-com-pirate-5abcf8579a4816.467935311522333783632.png">
                    <div class="logo-name">
                        <h1>LA BATAILLE NAVALE</h1>
                    </div>
            </div>
            <h1>Plongez dans l'action,<br> defiez vos amis ou d autres joueurs pour la domination navale !</h1>
            <div>
            <h2 v-if="this.$store.state.identifiants.connected === true">Pseudo : {{ pseudo }}</h2>
            <input v-if="this.$store.state.identifiants.connected === false" type="button" class="favorite styled" @click="formConnect()" value="SE CONNECTER !"/>
            <input v-if="this.$store.state.identifiants.connected === false" type="button" class="favorite styled" @click="register()"  value="REJOIGNEZ-NOUS !"/>
            </div>
        </div>
            <formulaire v-if="this.$store.state.toggle && this.$store.state.identifiants.connected === false" class="connect"
            msg="X" title="Connecte toi !" buttonTitle="Se connecter !" @submit="login"/>
        <div class="navbar">
            <h1 @click="acceuil">Acceuil</h1>
            <h1 v-if="this.$store.state.identifiants.connected === true" @click="lobby">Lobby</h1>
            <h1 v-if="this.$store.state.identifiants.connected === true" @click="mygames">Mes Parties</h1>
            <h1>Classement ( a venir )</h1>
            <h1>Boutique ( a venir )</h1>
            <h1>Regles du jeu ( a venir )</h1>
        </div>
        <div class="news-title">
            <h1>Dernieres News</h1>
            </div>
            <div class="news-container">
                <div class="news1">
                    <h2>A VENIR . . .</h2>
                </div>
                <div class="news2">
                    <h2>A VENIR . . .</h2>
                </div>
                <div class="news3">
                    <h2>A VENIR . . .</h2>
                </div>
            </div>
            <div class="navbar-footer">
                <h1>@Warriopops</h1>
            </div>
            <div class="testo" :key="index" v-for="(list, index) in this.list">
                <h2>{{ list }}</h2>
            </div>
    </div>
</template>

<script>
import footer2 from './assets/footer2.png'
import footer from './assets/footer.png'
import body from './assets/body.png'
import formulaire from './FormulaireComponent.vue'

export default {
  components: {
    formulaire
  },
  data () {
    return {
      token: '',
      footer2,
      toggle: false,
      footer,
      body,
      list: [],
      idendifiants: { login: 'test', password: 'test', token: '' }
    }
  },
  computed: {
    pseudo () {
      return this.$store.state.identifiants.login
    }
  },
  methods: {
    lobby () {
      this.$router.push('/dashboard')
    },
    acceuil () {
      this.$router.push('/home')
    },
    login (pseudo, password) {
      this.idendifiants.login = pseudo
      this.idendifiants.password = password
      this.$store.dispatch('Login', this.idendifiants)
      console.log(this.$store.state.identifiants)
    },
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
    },
    formConnect () {
      this.$store.state.toggle = !this.$store.state.toggle
    },
    mygames () {
      console.log('reussi')
      this.$router.push('/board/0')
      this.$store.commit('Mygames')
    }
  }
}
</script>

<style scoped>
.header{
    margin-top:0px;
}
.header-container{
    width:100%;
    height:90px;
    background-color:rgb(0, 0, 0, 0.5);
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color:white;
    align-items:center
}
p{
    display:inline-block
}
img{
    width:80px;
    height:80px;
}
.logo{
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-left:10px;
}
.logo-name{
    margin-left:20px;
}
.button{
    margin-top:50px;
}
.styled, .join {
    display:inline-block;
    max-width:250px;
    margin-top:5px;
    border: 0;
    width:200px;
    height:60px;
    margin-right:10px;
    line-height: 1.2;
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
    .connect{
        background-color:rgba(0, 0, 0, 0.6);
        width:500px;
        height:150px;
        margin-left:66.5%;
        margin-top:0px;
        z-index:1;
        position:fixed;
    }
    .navbar{
        margin-top:100px;
        margin-bottom:100px;
        display:flex;
        flex-direction:row;
        background-color:rgba(255, 255, 255, 0.6);
        height:60px;
        align-items:center;
        justify-content: space-around;
    }
    .news-title h1{
        color:white;
        font-size:30px;
    }
    .news1 h2, .news2 h2, .news3 h2{
        position:relative;
        color:white;
        margin-left:10px;
    }
    .news-container{
        text-align:start;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .news1, .news2, .news3{
        width:440px;
        height:180px;
        background-size: cover;
        background-color:black;
    }
    .navbar-footer{
        margin-top:150px;
        display:flex;
        flex-direction:row;
        background-color:#0c3a65;
        color:white;
        height:60px;
        align-items:center;
        justify-content: space-around;
    }
    .header-container h2{
        margin-right:30px;
    }
    .navbar h1:hover{
        color:rgb(68, 68, 68);
    }

    @media screen and (max-width: 1400px){
        .news1, .news2, .news3{
            width:400px;
        }
    @media screen and (max-width:1200px){
        .news1, .news2, .news3{
            width:300px;
        }
        .connect{
            margin-left:30%;
            margin-right:30%
        }
        }
    @media screen and (max-width:950px){
        .news1, .news2, .news3{
            width:150px;
        }
    }
    @media screen and (max-width:800px){
        .connect{
            margin-left:15%;
            margin-right:15%
        }
        .header-container h1{
            visibility: hidden;
        }
    }
    @media screen and (max-width:650px){
        .navbar {
            display: grid;
            grid-template-rows: 33% 33% 33%;
            grid-template-columns: 200px 200px;
        }
        .navbar h1{
            margin-top:30px;
        }
        .connect{
            margin-left:5%;
            margin-right:5%
        }
    }
    @media screen and (max-width:550px){
        .connect{
            margin-left:0%;
            margin-right:0%
        }
        .navbar, .navbar-footer, .header-container{
            width:550px;
        }
    }
    @media screen and (max-width:500px){
        .navbar, .header-container, .news-container, .news-title{
            width:500px;
            margin-bottom:55px;
        }
        .navbar-footer{
            width:500px;
        }
    }
    };
</style>
