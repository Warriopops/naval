<template>
  <div id="app">
    <Naval/>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
  </div>
</template>

<script>
import Naval from './Bataille-Naval.vue'

export default {
  name: 'App',
  components: {
    Naval,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
