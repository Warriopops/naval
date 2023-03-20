<template>
        <div class="plateau" id="plateau">
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
      hauteur: 3,
      largeur: 5,
      compteur: 0
    }
  },
  mounted () {
    while (this.hauteur * this.largeur !== this.compteur) {
      const els = document.createElement('div')
      els.className = 'case'
      const contenu = document.createTextNode(this.compteur)
      els.appendChild(contenu)
      document.getElementById('plateau').appendChild(els)
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
 .plateau{
    margin-left:550px;
    margin-top:100px;
    display:grid;
    grid-template-columns: repeat(var(--largeur), 50px);
    width:400px;
}
 .plateau .case{
    border: 1px solid black;
    height:45px;
    align-self:center;
}
  .case{
  text-align: center;
  background-color: rgb(147, 147, 147);
}
</style>
