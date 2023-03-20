<template>
    <div>
        <h1 @click="urlFunction">INFOS DE LA PARTIE : </h1>
        <div v-if="gamesinfosloaded == false">
          {{ gamesInfos }}
        </div>
        {{ gamesInfos }}
        <div>
          <input type="button" @click="reload" value="RAFFRAICHIR LA PAGE">
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
  },
  computed: {
    ...mapState({
      gamesInfos: 'gamesInfos',
      gamesinfosloaded: 'gamesinfosloaded'
    })
  }
}
</script>
