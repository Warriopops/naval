<template>
  <div class="container-header">
    <div class="header">
      <h1>Bataille Navale</h1>
      <h2>Jouez en ligne contre vos amis !</h2>
      <h3>Placez vos bateaux, Coulez les bateaux ennemis !</h3>
    </div>
    <div class="container">
      <div class="register">
        <formulaire
          :img="footer2"
          title="Inscrit toi !"
          button-title="S'inscrire"
          @submit="register"
        />
        <font-awesome-icon icon="fa-solid fa-left" />
      </div>
      <div class="back">
        <input
          type="button"
          class="favorite styled"
          @click="back"
          value="Retour"
        >
      </div>
    </div>
  </div>
</template>

<script>
import formulaire from './FormulaireComponent.vue'
import footer2 from '@/assets/footer2.png'

export default {
  components: {
    formulaire
  },
  data () {
    return {
      footer2
    }
  },
  methods: {
    register (pseudo, password) {
      const identifiantsRegister = { pseudo, password }
      this.$store.dispatch('register', identifiantsRegister)
      this.$router.push('/')
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');

    .styled {
    margin-top:190px;
    border: 0;
    width:200px;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgb(169, 0, 0);
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);
    }

  .styled:hover {
    background-color: rgba(255, 0, 0, 1);
  }

  .styled:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
  }
  .container-header{
    margin-top:60px;
  }
</style>
