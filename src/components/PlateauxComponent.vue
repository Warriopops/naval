<template>
  <div>
    <div class="plateau">
      <div v-for="(index) in largeur + 1" :key="index">
        <div class="case"><h1>{{ index - 1 }}</h1></div>
      </div>
      <div>
      <div v-for="(index) in hauteur" :key="index">
          <div class="case"><h1>|</h1></div>
        </div>
      </div>
      <div v-for="(index) in largeur" :key="index">
        <div v-for="(index) in hauteur" :key="index">
          <div :id="`index`" class="case"><h1></h1></div>
        </div>
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
    },
    data () {
      return {
        hauteur: 3,
        largeur: 5,
        i: 0,
        compteur: []
      }
    },
    mounted () {
      document.documentElement.style.setProperty('--largeur', this.largeur + 1)
    },
    methods: {
      getPositionById(id) {
        return {x: 0, y: 0}
      },
      getIdByPositionb(x, y) {
        return 12;
      }
    }
  }
</script>

<style scoped>
:root{
 --largeur: 6;
}
.plateau{
  display:grid;
  grid-template-columns: repeat(var(--largeur), 60px);
  margin-left:600px;
  margin-top:200px
}
.case{
  background-color:grey;
  margin-top:0px;
  height:60px;
  width:60px;
  border: 1px solid black;
}

</style>
