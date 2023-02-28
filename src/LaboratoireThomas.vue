
<template>
    <div>
        <h1>Mon compteur</h1>
        <p @click="increment">Vous avez cliqué {{ total }} fois</p>
        <!-- eslint-disable vue/valid-attribute-name -->
        <p>le total génral de vuex est {{ totalGenerale }}</p>
        <p>le double du total génral de vuex est {{ doubleDuTotal }}</p>
        <p>TEST {{ test }}</p>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Compteur',
  data () {
    return {
      identifiants: { login: 'thomas', password: 'maxlea' },
      total: 0
    }
  },
  methods: {
    increment () {
      this.total += 1
      this.$store.commit('setTotalFromVueX', this.totalGenerale += 1)
      this.$store.commit('Login', this.identifiants)
      console.log(this.$store.state.identifiants.login)
      console.log(this.$store.state.identifiants.password)
    },
    test () {
      this.$store.commit('Login', this.login)
    }
  },
  computed: {
    totalGenerale () {
      return this.$store.state.totalFromVueX
    },
    doubleDuTotal () {
      return this.$store.getters.doubleDuTotal
    }
  }
}
</script>
