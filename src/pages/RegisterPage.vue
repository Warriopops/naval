<template>
    <div>
        <h1>INSCRIPTION</h1>
        <navbar class="navbar"/>
    </div>
    <div class="infos">
      <h2>Inscription</h2>
    </div>
    <div class="container">
        <div class="formulaire">
            <input id="pseudo" v-model="pseudo" type="text" placeholder="Pseudo">
            <input id="Password" v-model="password" type="text" placeholder="Mot de passe" class="password">
        </div>
        <h3 v-if="registerOn">Inscription Accomplis</h3>
        <h4 v-if="registerFail">Inscription Echouer : Rentrer un pseudo ou mot de passe</h4>
      <buttonComponent class="registerButton" title="S'inscrire" @click="register"></buttonComponent>
    </div>
    <div class="button">
      <buttonComponent class="back" title="RETOUR" @click="back"></buttonComponent>
    </div>
</template>

<script>
  import navbar from '@/components/NavbarComponent.vue'
  import buttonComponent from '@/components/ButtonComponent.vue'

  export default{
    data:function() {
      return {
        pseudo: '',
        password: '',
        idendifiants: {},
        registerOn: false,
        registerFail: false,
      };
    },
    components:{
      navbar,
      buttonComponent,
    },
    methods:{
      register () {
        if (this.pseudo && this.password !== null){
          this.idendifiants = {pseudo: this.pseudo, password: this.password}
          const register = this.$store.dispatch('register', this.idendifiants).then(() =>{
            this.registerOn = true
          }).catch(() =>{
            this.registerOn = false
          })
        }
        this.pseudo = '',
        this.password = ''
      },
      back () {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
.navbar{
    margin-top:10px;
    margin-bottom:30px
}
h1{
  color:white;
  text-decoration:underline;
  font-size:30px;
  margin-bottom:30px;
  height:20px;
}
.button{
  background-color:grey;
  width:450px;
  margin-left:550px;
  border: 1px solid #000000;
}
.container{
    display:grid;
    grid-template-columns: repeat(1, 450px);
    background-color: rgb(72, 72, 72);
    width:450px;
    margin-left:550px;
    justify-content: space-between;
    border: 1px solid #000000;
    color:white;
}
.infos{
  display:grid;
  grid-template-columns: repeat(1, 450px);
  width:450px;
  margin-left:550px;
  background-color:grey;
  border: 1px solid #000000;
  vertical-align: center;
  color:rgb(223, 197, 0);
}
.back{
    width:90px;
    height:30px;
}
.registerButton{
    width:150px;
    height:40px;
    margin-left:150px;
}
.formulaire{
    width:30px;
    margin-left:140px;
    margin-top:20px;
}
.password{
    margin-top:10px;
    margin-bottom:10px;
}
h3{
    color:green;
    width:200;
}
h4{
    color:red;
    width:200;
}
</style>