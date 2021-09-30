<template>
  <div>
    <div class="d-flex">
      <div class="" v-for="(col, colIndex) in board" v-bind:key="colIndex">
        <button
          class="btn btn-primary ball"
          @click="setBall(colIndex, currentPlayer.color)"
        >
          {{ colIndex }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["board", "currentPlayer"]),
  },
  methods: {
    setBall: function(colIndex, color) {
      this.$store.dispatch("setBall", {
        colIndex: colIndex,
        rowIndex: 0,
        color: color,
      });
    },
  },
};
</script>
