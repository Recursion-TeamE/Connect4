<template>
  <div>
    <h1>Connect 4</h1>
    <p>Click columns to play</p>
    <div class="d-flex" v-for="(row, rowIndex) in board" v-bind:key="rowIndex">
      <div
        class="ball"
        v-for="(col, colIndex) in row"
        v-bind:key="colIndex"
      >
        <BallSVGVue v-if="col.color !== null" :color="col.color"></BallSVGVue>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BallSVGVue from "./BallSVG";

export default {
  components: {
    BallSVGVue,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["board"]),
  },
  methods: {
    
  },
};
</script>

