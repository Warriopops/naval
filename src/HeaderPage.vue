<!-- eslint-disable vue/valid-v-on -->
<template>
  <div>
    <audio
      autoplay
      volume="0.2"
      loop="true"
    >
      <source
        src="@/assets/musique.mp3"
        type="audio/mpeg"
      >
      <source
        src="@/assets/musique.mp3"
        type="audio/wav"
      >
      <source
        src="@/assets/musique.mp3"
        type="audio/ogg; codecs=vorbis"
      >
    </audio>
  </div>
</template>

<script>
</script>

<style>
    @import url('https://fonts.cdnfonts.com/css/pirate-ship');

    h1, h2, h3{
        padding-top:5px;
        color: black(255, 217, 0);
        font-family: 'Pirate Ship', sans-serif;
        font-size:15px;
        text-shadow: 2px 2px 16px rgba(0,0,0,1);
    }
    .header{
        width:550px;
        height:125px;
        background-size:cover;
        border-radius:5px 5px 5px 5px;
        width:600px;
        height:125px;
        margin-left:0px;
    }
    .container-header{
        width: 600px;
        height:605px;
        margin: 0 auto;
        padding-top:2px;
        padding-bottom:20px;
        padding-left:10px;
        padding-right:10px;
        background-size:cover;
    }
    .footer{
        width: 50px;
        height: 50px;
    }
    html{
    background-image: url(assets/home.jpg);
    background-size: cover;
}

</style>
