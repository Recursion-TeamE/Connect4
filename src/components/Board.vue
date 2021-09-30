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
        <TemplateBallSVG v-if="col.color !== null" :color="col.color"
            :circle1="ballColor.red.circle1"
            :circle2="ballColor.red.circle2"
            :circle3="ballColor.red.circle3"
            :circle4="ballColor.red.circle4"
            :circle5="ballColor.red.circle5"
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
    ...mapState(["board"]),
  },
  methods: {},
};
</script>

