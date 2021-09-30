<template>
  <div>
    <h1>Connect 4</h1>
    <p>Click columns to play</p>
    <div class="d-flex" v-for="(row, rowIndex) in board" v-bind:key="rowIndex">
      <div class="ball" v-for="(col, colIndex) in row" v-bind:key="colIndex">
        <TemplateBallSVG
          v-if="col.color !== null"
          :color="col.color"
        ></TemplateBallSVG>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TemplateBallSVG from "./svg/TemplateBallSVG.vue";
import { ballColor } from "@/config.js";

export default {
  components: {
    TemplateBallSVG,
  },
  props: {},
  data() {
    return {
      ballColor: ballColor,
    };
  },
  computed: {
    ...mapState(["board", "currentPlayer"]),
  },
  methods: {},
};
</script>
