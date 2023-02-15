<template>
    <div class="container-header">
        <div class="header">
            <h1>Bataille Navale</h1>
            <h2>Jouez en ligne contre vos amis !</h2>
            <h3>Placez vos bateaux, Coulez les bateaux ennemis !</h3>
        </div>
            <formulaire class="inscrire" title="Inscrit toi !" buttonTitle="S'inscrire" @onSubmit="register" />
            <formulaire class="connecter" title="Connecte toi !" buttonTitle="Se Connecter !" @onSubmit="login" />
            <formulaire class="mdp" title="Mot de passe oublier" buttonTitle="Mot de passe oublier" @onSubmit="login" />
    </div>
    <home/>
</template>

<script>
    import home from './HomeCompenent.vue';
    import formulaire from './FormulaireComponent.vue';

    export default {
        components: {
            home,
            formulaire,
        }
    }
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');

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
    .header{
        width:550px;
        height:125px;
        background-size:cover;
        margin-top:20px;
        border-radius:5px 5px 5px 5px;
        background-image:url(assets/header.jpg);
        width:600px;
        height:125px;
        margin-left:0px;
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
    .inscrire{
        background-image:url(./assets/body.png);
    }
    .connecter{
        background-image:url(./assets/footer.png);
    }
    .mdp{
        background-image:url(./assets/footer2.png);
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