<template>
  <div>
    <div class="d-flex" v-for="(row, rowIndex) in board" v-bind:key="rowIndex">
      <div class="ball" v-for="(col, colIndex) in row" v-bind:key="colIndex">
        <!-- {{ col.svg }} -->
        <BallRedSVG />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BallRedSVG from "../assets/images/ball-red.min.svg";
console.log(BallRedSVG);
export default {
  components: {
    BallRedSVG,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["board"]),
  },
  methods: {},
};
</script>

