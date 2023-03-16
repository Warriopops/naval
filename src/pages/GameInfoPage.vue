<template>
    <div>
        <h1 @click="urlFunction">INFOS DE LA PARTIE : </h1>
        <div v-if="this.$store.state.gamesinfosloaded == false">
          {{ this.$store.state.gamesInfos }}
        </div>
        {{ this.$store.state.gamesInfos }}
        <div>
          <input type="button" @click="reload" value="RAFFRAICHIR LA PAGE">
        </div>
    </div>
</template>

<script>
export default {

  data: function () {
    return {
      url: null,
      boardId: null,
      gameInfo: '',
      index: 0
    }
  },
  methods: {
    urlFunction () {
      this.$store.dispatch('gameinfo')
    },
    reload () {
      location.reload()
    }
  },
  mounted () {
    this.urlFunction()
  }
}
</script>
