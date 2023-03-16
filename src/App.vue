<template>
  <div>
    <audio autoplay volume="0.2" loop="true">
        <source src="@/assets/musique.mp3" type="audio/mpeg">
        <source src="@/assets/musique.mp3" type="audio/wav">
        <source src="@/assets/musique.mp3" type="audio/ogg; codecs=vorbis">
      </audio>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('load')
  },
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
body{
  margin:0px;
}
</style>
