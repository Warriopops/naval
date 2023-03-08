<template>
    <div class="navbar">
            <h1 @click="acceuil">Acceuil</h1>
            <h1 v-if="this.$store.state.identifiants.connected === true" @click="lobby">Lobby</h1>
            <h1 v-if="this.$store.state.identifiants.connected === true" @click="mygames">Mes Parties</h1>
            <h1>Classement ( a venir )</h1>
            <h1>Boutique ( a venir )</h1>
            <h1>Regles du jeu ( a venir )</h1>
        </div>
</template>

<script>
import footer2 from '@/assets/footer2.png'
import footer from '@/assets/footer.png'
import body from '@/assets/body.png'

export default {
  components: {
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
      this.$router.push('/')
    },
    mygames () {
      console.log('reussi')
      this.$router.push('/board/0')
      this.$store.dispatch('Mygames')
    }
  }
}
</script>

<style scoped>
    .navbar h1:hover{
        color:rgb(68, 68, 68);
    }
    .navbar h1{
        cursor:default
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
        width:100%
    }
</style>
