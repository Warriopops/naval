<template>
    <div class="plateaux">
        <div class="case" id="case">
        </div>
    </div>
</template>

<script>
export default {
  emit: ['onSubmit'],
  components: {
  },
  props: {
  },
  data () {
    return {
      hauteur: 10,
      largeur: 8,
      compteur: 0
    }
  },
  mounted () {
    while (this.hauteur * this.largeur !== this.compteur) {
      const els = document.createElement('div')
      els.className = 'div'
      const contenu = document.createTextNode(this.compteur)
      els.appendChild(contenu)
      document.getElementById('case').appendChild(els)
      this.compteur = this.compteur + 1
    }
    document.documentElement.style.setProperty('--largeur', this.largeur)
  },
  methods: {
  }
}
</script>

<style>
:root{
  --largeur: 8;
}
.plateaux .case{
    margin-left:550px;
    margin-top:100px;
    display:grid;
    grid-template-columns: repeat(var(--largeur), 50px);
    width:400px;
}
.plateaux .case div{
    border: 1px solid black;
    height:45px;
    align-self:center;
}
 .plateaux .div{
  text-align: center;
  background-color: rgb(147, 147, 147);
}
</style>
