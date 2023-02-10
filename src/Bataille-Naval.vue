<template>
    <div class="container-header">
        <div class="header">
            <h1>Bataille Navale</h1>
            <h2>Jouez en ligne contre vos amis !</h2>
            <h3>Placez vos bateaux, Coulez les bateaux ennemis !</h3>
        </div>
        <!-- <Formulaire img="/footer2.png" title="Inscrit toi !" buttonTitle="S'inscrire" @onSubmit="register" /> -->
        <div class="body">
            <h4>Inscrit toi !</h4>
            <div class="body-container">
                <div class="identifiant-container">
                    <div class="identifiant">
                        <input type="text" id="pseudo" placeholder="Pseudo" v-model="pseudo_register">
                    </div>
                    <div class="identifiant">
                        <input type="text" id="password" placeholder="Mot de passe" v-model="password_register">
                    </div>
                </div>
                <div class="test">
                    <input type="button" value="S'inscrire" class="favorite styled" @click="register()">
                </div>
                <img class="icone" :src="require('./assets/canon.png')"/>
            </div>
        </div>
        <div class="footer">
            <h4>Connecte toi !</h4>
            <div class="body-container">
                <div class="identifiant-container">
                    <div class="identifiant">
                        <input type="text" id="pseudo" placeholder="Pseudo" v-model="pseudo_login">
                    </div>
                    <div class="identifiant">
                        <input type="text" id="password" placeholder="Mot de passe" v-model="password_login">
                    </div>
                </div>
                <div class="test">
                    <input type="button" value="Se connecter" class="favorite styled" @click="login()">
                </div>
                <img class="icone" :src="require('./assets/canon.png')"/>
            </div>
        </div>
        <div class="footer2">
            <h4>Mot de passe oublier ?</h4>
            <div class="body-container">
                <div class="identifiant-container">
                    <div class="identifiant">
                        <input type="text" id="pseudo" placeholder="Pseudo">
                    </div>
                    <div class="identifiant">
                        <input type="text" id="password" placeholder="Mot de passe">
                    </div>
                </div>
                <div class="test">
                    <input type="button" value="Mot de passe oublier" class="favorite styled" @click="jenny()">
                </div>
                <img class="icone" :src="require('./assets/canon.png')"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                id: 0,
                pseudo_register: '',
                password_register:'',
                pseudo_login:'',
                password_login:'',
                todos:[],
                thomas: 0,
            };
        },
        mounted() {
        },
        methods:{
            jenny(){
                this.thomas += 1;
                console.log(this.thomas);
            },
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
                })
                .then(login => console.log(login.data))
                this.pseudo_login = '';
                this.password_login = '';
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');
    html{
        background-image:url(assets/html.jpg);
        background-size:cover;
        background-size : 2000px 1000px;
    }
    h1, h2, h3, h4{
        padding-top:5px;
        color: rgb(255, 217, 0);
        font-family: 'Pirate Ship', sans-serif;
        font-size:15px;
        text-shadow: 2px 2px 16px rgba(0,0,0,1);
    }
    h1, h2, h3{
        color:black;
    }
    h4{
        text-align:start;
        margin-left:5px;
    }

    .header, .body, .footer, .footer2{
        width:550px;
        height:125px;
        background-size:cover;
        margin-top:20px;
        margin-left:5px;
        border-radius:5px 5px 5px 5px;
    }

    .header{
        background-image:url(assets/header.jpg);
        width:600px;
        height:125px;
        margin-left:0px;
    }
    .body{
        background-image:url(assets/body.png);
    }
    .footer{
        background-image:url(assets/footer.png);
    }
    .footer2{
        background-image:url(assets/footer2.png);
    }
    .container-header{
        width: 600px;
        height:605px;
        -webkit-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        -moz-box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        box-shadow: 0px 0px 25px 10px rgba(0,0,255,0.77);
        margin: 0 auto;
        padding-top:2px;
        padding-bottom:20px;
        padding-left:10px;
        padding-right:10px;
        background-image:url(assets/carte2.jpg);
        background-size:cover;
    }
    h4{
        margin-top:0px;
    }
    .body:hover .icone, .footer:hover .icone, .footer2:hover .icone{
        text-shadow: 0px 5px 17px rgba(0,0,0,1);
        visibility: visible;
    }
    .body:hover h4, .footer:hover h4, .footer2:hover h4{
        text-shadow: 0px 5px 17px rgb(255, 221, 0);
    }
    .identifiant-container{
        text-align: start;
        margin-left:20px;
        display: flex;
        flex-direction: column;
        width:150px;
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
    .body-container{
        display:flex;
        flex-direction: row;
    }
    .test{
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

<!-- ETAPE 1 : mettre inscrit toi et connecte toi dans formulaire.vue
Template qui dois fonctionner : 
"
<Formulaire img="/monimage.png" title="Inscrit toi !" buttonTitle="S'inscrire" @onSubmit="register" />
<Formulaire img="/monimage.png" title="Connecte toi !" buttonTitle="Se connecter" @onSubmit="login" />
voir props / voir components / pour onsubmit voir emit

ETAPE 2 : créer une page, quand je clic sur le bouton va sur une autre page sans utiliser HREF mais en
utilisant une librairie appeler vue-router / attention elle s'ajoute pas comme une autre mais il faut la configurer en modifiant
le main.js ect et lire la doc

ETAPE 3 : 
    - cRÉER UNE PAGE /connect
    - Déplacer la partie connection/inscriptio sur la page /connect
    - Modifier la page d'acceuil pour avoir que l'accueil
" -->