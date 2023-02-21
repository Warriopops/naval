<template>
    <div class="formulaire">
        <div class="formulaire-container">
            <img class="image" :src="img" alt="pic">
            <div class="formulaire-button">
                <input type="button" :value="buttonTitle" class="favorite styled">
            </div>
            <img class="icone" :src="require('./assets/canon.png')"/>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: String,
    img: String,
    buttonTitle: String
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pirate-ship');

.styled {
    border: 0;
    width:300px;
    line-height: 3;
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
    margin-left:150px;
    margin-top:50px;
}
.identifiant{
    margin-top:10px;
}
.icone{
    margin-left: 50px;
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
.formulaire:hover .icone{
    text-shadow: 0px 5px 17px rgba(0,0,0,1);
    visibility: visible;
}
</style>
