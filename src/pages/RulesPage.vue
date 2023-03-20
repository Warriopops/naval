<template>
    <div class="container">
        <navbar class="navbar"/>
        <h1>REGLES DU JEU</h1>
        <h2>Peu importe la version de bataille navale que vous avez, dans ce type de jeux, deux joueurs s'affrontent sur une grille de 10 × 10 cases.
            Le joueur qui détruit la totalité de la flotte de son adversaire remporte la partie de jeux. Une fois que les navires sont positionnés au hasard,
            chaque adversaire tire sur des cases de la grille adverse et tente de couler la flotte de l’adversaire à tour de rôle. À travers des données, le jeu de
            bataille navale indique automatiquement s'il y a eu un coulé ou un raté. Lorsqu'un joueur frappe le navire d'un adversaire, il peut à nouveau tirer. Ainsi,
            en étant adroit, vous coulerez plus rapidement l’autre flotte. Pour venir à bout des bateaux ennemi (flotte de votre adversaire), Papergames.io vous met dans
            les conditions idéales en vous permettant d’utiliser différentes armes : en plus des missiles antinavires, les joueurs ont même la possibilité de lancer des
            salves de missiles air-sol qui frappent 5 cases en forme de « + ». En tenant compte du positionnement des bateaux partenaires et ennemi, vous et votre
            adversaire ferez preuve d’une navigation visuelle stratégique pour voir où toucher et faire couler
            la flotte de l’un comme de l’autre à tour de rôle. Comme vous pouvez le voir, les règles et le code de jeu multijoueur bataille navale sont assez simples.</h2>
    </div>
</template>

<style scoped>
.container h2{
    width:700px;
    text-align: center;
    margin-left:440px
}
.navbar{
    margin-top:10px;
    margin-bottom:30px
}
</style>

<script>

import navbar from '@/components/NavbarComponent.vue'

export default {
  components: {
    navbar
  }
}
</script>
