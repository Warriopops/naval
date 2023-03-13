<template>
    <div>
        <section class="test"></section>
        <div class="case">
            <div id="div1">test</div>
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
      case: 18,
      compteur: 0
    }
  },
  mounted () {
    const els = document.createElement('div')
    const contenu = document.createTextNode('salut')
    els.appendChild(contenu)
    document.body.insertBefore(els, document.body.firstChild)
  },
  methods: {
  }
}
</script>

<style scoped>
.case{
    margin-left:550px;
    margin-top:100px;
    background-color: rgb(147, 147, 147);
    display:grid;
    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px;
    width:400px;
}
.case div{
    border: 1px solid black;
    height:45px;
    align-self:center;
    vertical-align:middle;
}
</style>
