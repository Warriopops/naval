<template>
  <router-view></router-view>
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
