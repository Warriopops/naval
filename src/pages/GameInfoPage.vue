<template>
    <div>
        <h1 @click="test">INFOS DE LA PARTIE : </h1>
        {{ $store.state.identifiantsParty }}
    </div>
</template>

<script>

export default {

  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
