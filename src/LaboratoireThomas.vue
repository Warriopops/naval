
<template>
    <div>
        <p @click="increment">Vous avez cliqué {{ total }} fois</p>
        <p @click="incrementAsync">Vous avez cliqué {{ total }} fois</p>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Compteur',
  data () {
    return {
      identifiants: { login: 'thomas', password: 'maxlea' }
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    incrementAsync () {
      this.$store.dispatch({ type: 'incrementAsync', amount: 10 })
    }
  },
  computed: {
    total () {
      return this.$store.state.count
    }
  }
}
</script>
