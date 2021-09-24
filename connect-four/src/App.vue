<template>
  <div id="app">
    <h1>Connect 4</h1>
    <p>Click columns to play</p>
    <!--
    <BallTest :x="200" :y="165" />
    -->
    <Ball :x="200" :y="165" />
    <Controller />
  </div>
</template>

<script>
import Controller from "./components/Controller.vue";
import Ball from "./components/Ball.vue";
// import BallTest from "./components/BallTest.vue";

export default {
  name: "app",
  components: {
    Controller,
    Ball,
    // BallTest,
  },
};
</script>

