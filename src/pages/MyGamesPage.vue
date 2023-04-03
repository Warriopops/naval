<!-- eslint-disable vue/this-in-template -->
<template>
  <div>
    <h1>mes parties</h1>
    <navbar class="navbar" />
    <div class="infos">
      <h2>lobby</h2>
      <h2>Adversaire</h2>
      <h2>Vous</h2>
    </div>
    <div
      v-for="(list, index) in list"
      :key="index" class="container"
    >
      <h2>{{ index }}</h2>
      <h2>{{list.host.login }}</h2>
      <h2>{{ list.guest.login }}</h2>
    </div>
    <div class="button">
      <buttonComponent msg="RETOUR" @click="back"></buttonComponent>
    </div>
  </div>
</template>
<script>

  import navbar from '@/components/NavbarComponent.vue'
  import { mapState } from 'vuex'
  import buttonComponent from '@/components/ButtonComponent.vue'
  export default {
    components: {
      navbar,
      buttonComponent
    },
    data: function () {
      return {
        list: []
      }
    },
    computed: {
      ...mapState({
        myGames: 'myGames'
      })
    },
    mounted () {
      this.mygames()
    },
    methods: {
      back () {
        this.$router.push('/')
      },
      mygames () {
        const test = this.$store.dispatch('myGames').then(()=> {
          this.list = this.$store.state.myGames
        })
      }
    }
  }
</script>

<style scoped>
.button{
  background-color:grey;
  width:450px;
  margin-left:550px;
  border: 1px solid #000000;
}
.container{
    display:grid;
    grid-template-columns: repeat(3, 150px);
    background-color: rgb(72, 72, 72);
    width:450px;
    margin-left:550px;
    justify-content: space-between;
    border: 1px solid #000000;
    color:white;
}
.infos{
  display:grid;
  grid-template-columns: repeat(3, 150px);
  width:450px;
  margin-left:550px;
  background-color:grey;
  border: 1px solid #000000;
  vertical-align: center;
  color:rgb(223, 197, 0);
}
.navbar{
    margin-top:10px;
    margin-bottom:10px
}
h1{
  color:white;
  text-decoration:underline;
  font-size:30px;
  margin-bottom:30px;
  height:20px;
}
</style>
