<template>
  <div>
    <h1>MES PARTIES</h1>
    <navbar class="navbar" />
    <div
      class="container"
      :key="index"
      v-for="(list, index) in list"
    >
      <h1>LOBBY {{ index }} : </h1>
      <h2>{{ list.host.login }} VS {{ list.guest.login }}</h2>
    </div>
  </div>
</template>
<script>

import navbar from '@/components/NavbarComponent.vue'
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      list: []
    }
  },
  components: {
    navbar
  },
  computed: {
    ...mapState({
      myGames: 'myGames'
    })
  },
  methods: {
    mygames () {
      this.$store.dispatch('Mygames')
      this.list = this.$store.state.myGames
    }
  },
  mounted () {
    this.mygames()
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
