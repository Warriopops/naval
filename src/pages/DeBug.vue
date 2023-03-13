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
      this.$store.dispatch('save')
    }
  }
}
</script>
