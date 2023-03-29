<!-- eslint-disable vue/this-in-template -->
<template>
  <div>
    <h1>MES PARTIES</h1>
    <navbar class="navbar" />
    <div
      v-for="(list, index) in list"
      :key="index" class="container"
    >
      <h1>LOBBY {{ index }} : </h1>
      <h2>{{list.host.login }} VS {{ list.guest.login }}</h2>
    </div>
  </div>
</template>
<script>

  import navbar from '@/components/NavbarComponent.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      navbar
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
      mygames () {
        console.log(this.$store.state.myGames)
        const test = this.$store.dispatch('Mygames').then(()=> {
          this.list = this.$store.state.myGames
          console.log(this.$store.state.myGames)
        })
      }
    }
  }
</script>

<style scoped>

.container{
    display:flex;
    flex-direction:row;
    background-color: grey;
    width:300px;
    height:40px;
    margin-left:620px;
    padding-left:30px;
}
.container h2{
    margin-left:10px;
    color:rgb(0, 0, 0)
}
.navbar{
    margin-top:10px;
    margin-bottom:10px
}
</style>
