<template>
    <div>
        <input
            type="button"
            class="join"
            :value=msg
          >
    </div>
</template>

<script>
  export default {
    props: {
      msg: String,
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
    .styled, .join {
    margin-top:5px;
    border: 0;
    width:150px;
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
    cursor:pointer
    }
    .join{
      width:130px;
      font-size:13px;
      height:70%;
      margin-top:5px;
    }
    .styled:hover , .join:hover{
    background-color: rgba(255, 0, 0, 1);
    }
    .styled:active , .join:active{
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }
</style>