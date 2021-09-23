<template>
  <div>
    <p>--------- Controller Component ----------</p>
    <Ball :x="200" :y="165" />
    <Board />

    <div class="">
      <div class="d-flex">
        <div>ball</div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from "./Board.vue";
import Ball from "./Ball.vue";

export default {
  components: {
    Board,
    Ball,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>



