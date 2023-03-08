<template>
    <div>
        <input @click="resetparty" type="button" class="favorite styled" value="Reset Party">
        <input type="button" @click="save">
    </div>
</template>

<script>

import axios from 'axios'

export default {

  methods: {
    resetparty () {
      axios.get('https://naval.laize.pro/reset')
    },
    save () {
      const blabla = this.$store.state.identifiants
      localStorage.setItem('Identifiants', blabla)
      const cat = localStorage.getItem('Identifiants')
      console.log(cat)
    }
  }
}
</script>
