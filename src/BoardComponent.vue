<template>
    <div>
        <h1 @click="test">INFOS DE LA PARTIE : </h1>
        {{ $store.state.identifiantsparty }}
    </div>
</template>

<script>

export default {

  data: function () {
    return {
      lol: []
    }
  },
  methods: {
    test () {
    }
  }
}
</script>
