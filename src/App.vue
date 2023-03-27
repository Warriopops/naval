<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    mounted () {
      this.$store.dispatch('load')
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
