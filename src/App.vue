<template>
  <div id="app">
    <h1>Connect 4</h1>
    <p>Click columns to play</p>
    <Controller/>
  </div>
</template>

<script> 

import Controller from './components/Controller.vue'

export default {
  name: 'app',
  components: {
    Controller
  },
}
</script>

