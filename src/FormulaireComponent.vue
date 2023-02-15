<template>
    <div class="formulaire">
        <h1>{{ title }}</h1>
        <div class="formulaire-container">
            <div class="identifiant-container">
                <div class="identifiant">
                    <input type="text" id="pseudo" placeholder="Pseudo" v-model="pseudo_register">
                </div>
                <div class="identifiant">
                    <input type="text" id="password" placeholder="Mot de passe" v-model="password_register">
                </div>
            </div>
            <div class="formulaire-button">
                <input type="button" :value="buttonTitle" class="favorite styled" @click="$emit('onSubmit')">
            </div>
                <img class="icone" :src="require('./assets/canon.png')"/>
        </div>
    </div>
</template>
    
<script>
    import axios from 'axios';

    export default {
        emit:['onSubmit'],
        props: {
            title: String,
            buttonTitle: String,
        },
        data() {
            return {
                id: 0,
                pseudo_register: '',
                password_register:'',
                pseudo_login:'',
                password_login:'',
                todos:[],
            };
        },
        mounted() {
        },
        methods:{
            register(){
                if(this.pseudo_register !== '' && this.password_register !== '') {
                    this.todos.push({ key: this.id, pseudo: this.pseudo_register, password: this.password_register});
                    const register = axios.post('https://naval.laize.pro/user/signup' , {login: this.pseudo_register
                    , password: this.password_register});
                    this.id += 1;
                    this.pseudo_register = '';
                    this.password_register = '';
                    console.log(register);
                }
                console.log(this.todos);
            },
            login(){
                axios.post('https://naval.laize.pro/user/login', {
                    login: this.pseudo_login, 
                    password: this.password_login
                }).then(login => console.log(login.data))
                this.pseudo_login = '';
                this.password_login = '';
            }
        }
    }
</script>
    
<style scoped>
@import url('https://fonts.cdnfonts.com/css/pirate-ship');
.identifiant-container{
    text-align: start;
    margin-left:20px;
    display: flex;
    flex-direction: column;
    width:150px;
}

h1{
    padding-top:5px;
    color: rgb(255, 217, 0);
    font-family: 'Pirate Ship', sans-serif;
    font-size:15px;
    text-shadow: 2px 2px 16px rgba(0,0,0,1);
    text-align:start;
    margin-left:5px;
}

.formulaire{
    width:550px;
    height:125px;
    background-size:cover;
    margin-top:20px;
    margin-left:25px;
    border-radius:5px 5px 5px 5px;
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
    flex-direction: row;
}
.formulaire-button{
    margin-left:40px;
    margin-top:10px;
}
.identifiant{
    margin-top:5px;
    margin-bottom:5px;
}
.icone{
    height:100px;
    width:100px;
    margin-left:200px;
    visibility:hidden;
}
</style>