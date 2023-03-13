<template>
    <div>
        <h1 @click="urlFunction">INFOS DE LA PARTIE : </h1>
        {{ this.gameInfo }}
        <div>
          <input type="button" @click="reload" value="RAFFRAICHIR LA PAGE">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
      this.url = window.location.href
      this.boardId = this.url.substring(this.url.lastIndexOf('board') + 6)
      console.log(this.boardId)
      while (this.gameInfo[this.index].id !== this.boardId) {
        this.index = this.index + 1
      }
      this.gameInfo = this.gameInfo[this.index]
    },
    reload () {
      location.reload()
    }
  },
  mounted () {
    axios
      .get('https://naval.laize.pro/board')
      .then((reponse) => {
        this.gameInfo = reponse.data
        this.urlFunction()
      })
  }
}
</script>
