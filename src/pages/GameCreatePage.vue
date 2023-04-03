<template>
  <div class="container-header">
    <h2>Creation de partie</h2>
    <div class="navbar">
      <navbar />
    </div>
    <div class="createBoard">
      <h1>Taille du bateau : </h1>
    <select
      id="board-select"
      v-model="NumberBoard"
      name="board"
      class="selectBoard"
    >
      <option value=1>
        1
      </option>
      <option value=2>
        2
      </option>
      <option value=3>
        3
      </option>
      <option value=4>
        4
      </option>
      <option value=5>
        5
      </option>
    </select>
    <div>
      <buttonComponent class="componentCreateBoard" msg="Créer un bateau" @click="CreateBoard"></buttonComponent>
    </div>
    </div>
    <div class="infos">
      <h1>Bateau</h1>
      <h1>Taille du Bateau</h1>
      <h1>Modification</h1>
      <h1>Suppression</h1>
    </div>
    <div>
      <div
      v-for="(Board, index) in Board"
      :key="index"
      class="boardInfo"
    >
      <h1>{{ index }}</h1>
      <div v-if="Board.edit == false">
        <select
      id="board-select"
      v-model="NumberBoardEdit"
      name="board"
      class="selectBoard"
    >
      <option value=1>
        1
      </option>
      <option value=2>
        2
      </option>
      <option value=3>
        3
      </option>
      <option value=4>
        4
      </option>
      <option value=5>
        5
      </option>
    </select>
      </div>
      <h1 v-if="Board.edit == true">{{ Board.taille }}</h1>
      <buttonComponent v-if="Board.edit == true" msg="Modifier" class="componentEditBoard" @click="changeBoard(index)"></buttonComponent>
      <buttonComponent v-if="Board.edit == false" msg="Confirmer" class="componentConfirmBoard" @click="confirmBoard(index)"></buttonComponent>
      <buttonComponent msg="Supprimer" class="componentDeleteBoard" @click="deleteBoard(index)"></buttonComponent>
    </div>
    <div class="createGame">
      <buttonComponent msg="Créer une partie" @click="CreateParty"></buttonComponent> 
    </div>    
    </div>
  </div>
</template>

<script>

  import navbar from '@/components/NavbarComponent.vue'
  import buttonComponent from '@/components/ButtonComponent.vue'
  export default {
    components: {
      navbar,
      buttonComponent
    },
    data: function () {
      return {
        NumberBoard: 1,
        NumberBoardEdit: 1,
        Board: []
      }
    },
    methods: {
      CreateBoard () {
        let ships = parseInt(this.NumberBoard)
        this.Board.push({taille: ships, edit: true})
      },
      CreateParty () {
        let Ships = []
        for (let i = 0; i < this.Board.length; i++){
          Ships.push(this.Board[i].taille)
        }
        this.$store.dispatch('createParty', Ships)
      },
      deleteBoard (index) {
        this.Board.splice(index, 1)
      },
      changeBoard (index) {
        this.Board[index].edit = !this.Board[index].edit
      },
      confirmBoard (index) {
        this.Board[index].taille = this.NumberBoardEdit
        this.Board[index].edit = !this.Board[index].edit
      }
    }
  }
</script>

<style scoped>
    .container-header{
        width: 100%;
        padding-top:2px;
        background-size:cover;
        padding-left:0px;
    }
    .navbar{
      margin-top:50px;
      margin-bottom:30px;
    }
    .createBoard{
    display:grid;
    grid-template-columns: repeat(3, 150px);
    background-color: rgb(72, 72, 72);
    width:450px;
    height:40px;
    margin-left:550px;
    border: 1px solid #000000;
    color:white;
    margin-bottom:10px;
    }
    .selectBoard{
      margin-top:5px;
      height:30px;
      width:60px;
    }
    .boardInfo{
    display:grid;
    grid-template-columns: repeat(4, 150px);
    background-color: rgb(72, 72, 72);
    width:600px;
    height:40px;
    margin-left:480px;
    border: 1px solid #000000;
    color:white;
    }
    .infos{
    display:grid;
    grid-template-columns: repeat(4, 150px);
    background-color: grey;
    width:600px;
    height:40px;
    margin-left:480px;
    border: 1px solid #000000;
    color:rgb(223, 197, 0);
    }
    h2{
      color:white;
      text-decoration:underline;
      font-size:30px;
      height:20px;
    }
    .createGame{
    text-align:center;
    background-color: grey;
    width:600px;
    height:40px;
    margin-left:480px;
    border: 1px solid #000000;
    }
    .componentCreateBoard{
      width:120px;
      height:40px;
    }
    .componentEditBoard, .componentConfirmBoard, .componentDeleteBoard{
      width:140px;
    }
</style>
