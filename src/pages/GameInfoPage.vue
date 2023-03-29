<template>
  <div>
    <h1 @click="urlFunction">
      INFOS DE LA PARTIE :
    </h1>
    <div v-if="gamesinfosloaded == false">
      <h1>CHARGEMENT</h1>
    </div>
    {{ gamesInfos }}
    <div>
      <input
        type="button"
        value="RAFFRAICHIR LA PAGE"
        @click="reload"
      >
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {

    data: function () {
      return {
        url: null,
        boardId: null,
        gameInfo: '',
        index: 0,
      }
    },
    mounted () {
      this.urlFunction()
    },
    methods: {
      urlFunction () {
        this.$store.dispatch('getGameInfo')
      },
      reload () {
        location.reload()
      }
    },
    computed: {
      ...mapState({
        gamesInfos: 'gamesInfos',
        gamesinfosloaded: 'gamesinfosloaded'
      }),
    }
  }
</script>
