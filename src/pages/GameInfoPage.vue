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
      url: '',
      gameInfo: '',
      index: 0
    }
  },
  methods: {
    urlFunction () {
      this.url = window.location.href
      this.url = this.url.substring(this.url.lastIndexOf('board') + 6)
      console.log(this.url)
      console.log(this.gameInfo[this.index].id)
      while (this.gameInfo[this.index].id !== this.url) {
        this.index = this.index + 1
        console.log(this.index)
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
