<template>
  <div class="bg-color">
    <div class="d-flex" v-for="(row, rowIndex) in board" v-bind:key="rowIndex">
      <div
        class="ball"
        v-for="(col, colIndex) in row"
        v-bind:key="colIndex"
      >
        <TemplateBallSVG
          v-if="col.color !== null"
          :color="Config.ballColor[col.color]"
        ></TemplateBallSVG>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TemplateBallSVG from "./svg/TemplateBallSVG.vue";
import { Config } from "@/config.js";

export default {
  components: {
    TemplateBallSVG,
  },
  props: {},
  data() {
    return {
      Config: Config,
    };
  },
  computed: {
    ...mapState(["board", "currentPlayer"]),
  },
  methods: {},
};
</script>
