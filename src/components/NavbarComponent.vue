<template>
  <div class="navbar">
    <h1 @click="acceuil">
      Acceuil
    </h1>
    <h1
      v-if="identifiants.connected === true"
      @click="lobby"
    >
      Lobby
    </h1>
    <h1
      v-if="identifiants.connected === true"
      @click="myGames"
    >
      Mes Parties
    </h1>
    <h1>Classement ( a venir )</h1>
    <h1>Boutique ( a venir )</h1>
    <h1 @click="rules">
      Regles du jeu
    </h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        identifiants: 'identifiants'
      }),
      pseudo () {
        return this.$store.state.identifiants.login
      }
    },
    methods: {
      lobby () {
        this.$router.push('/dashboard')
      },
      acceuil () {
        this.$router.push('/')
      },
      myGames () {
        this.$router.push('/mygames')
      },
      rules () {
        this.$router.push('rules')
      }
    }
  }
</script>

<style scoped>
    .navbar h1:hover{
        color:rgb(68, 68, 68);
    }
    .navbar h1{
        cursor:pointer
    }
    .navbar{
        margin-top: 100px;
        margin-bottom: 100px;
        display: flex;
        flex-direction: row;
        background-color:rgba(255, 255, 255, 0.6);
        height: 60px;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }
</style>
