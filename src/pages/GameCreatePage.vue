<template>
  <div class="container-header">
    <h1>Creation de partie</h1>
    <navbar />
    <select
      id="board-select"
      v-model="NumberBoard"
      name="board"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
      <option value="5">
        5
      </option>
    </select>
    <div>
      <button @click="CreateBoard">
        Créer un bateau
      </button>
    </div>
    <div>
      <h3>Bateaux creer:</h3>
      <div>
        <h3>{{ Board }}</h3>
      </div>
      <button @click="CreateParty">
        Créer une partie
      </button>
    </div>
  </div>
</template>

<script>

  import navbar from '@/components/NavbarComponent.vue'
  export default {
    components: {
      navbar
    },
    data: function () {
      return {
        NumberBoard: 1,
        Board: []
      }
    },
    methods: {
      CreateBoard () {
        this.Board.push(this.NumberBoard)
      },
      CreateParty () {
        this.$store.dispatch('Createparty')
      }
    }
  }
</script>

<style scoped>
    .container-header{
      margin:5%;
        width: 90%;
        height:90%;
        -webkit-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        -moz-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        padding-top:2px;
        padding-bottom:20px;
        padding-left:10px;
        padding-right:10px;
        background-image:url(@/assets/carte2.jpg);
        background-size:cover;
    }
</style>
