<template>
  <div>
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

