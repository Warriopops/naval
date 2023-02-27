<template>
    <div class="formulaire">
        <h1>{{ title }}</h1>
        <div class="formulaire-container">
            <h1>{{ title }}</h1>
            <div class="identifiant-container">
                <div class="identifiant">
                    <input type="text" id="pseudo" placeholder="Pseudo" v-model="pseudo">
                </div>
                <div class="identifiant">
                    <input type="text" id="password" placeholder="Mot de passe" v-model="password">
                </div>
            </div>
            <div class="formulaire-button">
                <input type="button" :value="buttonTitle" class="favorite styled" @click="submitForm">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  emit: ['onSubmit'],
  components: {
  },
  props: {
    title: String,
    img: String,
    buttonTitle: String
  },
  data () {
    return {
      id: 0,
      pseudo: '',
      password: '',
      todos: []
    }
  },
  mounted () {
  },
  methods: {
    submitForm () {
      if (this.pseudo !== '' && this.password !== '') {
        console.log(this.password, this.pseudo)
        this.$emit('submit', this.pseudo, this.password)
        this.pseudo = ''
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pirate-ship');
.identifiant-container{
    position:absolute;
    margin-top:50px;
    margin-left:30px;
}

h1{
    color: rgb(255, 217, 0);
    font-family: 'Pirate Ship', sans-serif;
    font-size:15px;
    text-shadow: 2px 2px 16px rgba(0,0,0,1);
    position:absolute;
    margin-left:30px;
    margin-top:20px;
}

.formulaire:hover .icone{
    text-shadow: 0px 5px 17px rgba(0,0,0,1);
    visibility: visible;
}
.formulaire:hover h1{
    text-shadow: 0px 5px 17px rgb(255, 221, 0);
}

.styled {
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
.formulaire-container{
    display:flex;
}
.formulaire-button{
    position:absolute;
    margin-left:270px;
    margin-top:60px;
}
.identifiant{
    margin-top:10px;
}
.icone{
    height:100px;
    width:100px;
    margin-top:30px;
    visibility:hidden;
}
.image{
    margin-top:15px;
    margin-left:25px;
    height:125px;
    width:550px;
}
</style>
