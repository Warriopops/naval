<template>
    <div class="navbar">
            <h1 @click="acceuil">Acceuil</h1>
            <h1 v-if="this.identifiants.connected === true" @click="lobby">Lobby</h1>
            <h1 v-if="this.identifiants.connected === true" @click="mygames">Mes Parties</h1>
            <h1>Classement ( a venir )</h1>
            <h1>Boutique ( a venir )</h1>
            <h1 @click="rules">Regles du jeu</h1>
        </div>
</template>

<script>
import footer2 from '@/assets/footer2.png'
import footer from '@/assets/footer.png'
import body from '@/assets/body.png'
import { mapState } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      token: '',
      footer2,
      footer,
      body
    }
  },
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
    mygames () {
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
        width: 100%
    }
</style>
