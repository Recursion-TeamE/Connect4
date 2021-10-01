<template>
  <div>
    <div class="d-flex">
      <div v-for="(col, colIndex) in board" v-bind:key="colIndex">
        <button
          class="pt-3 d-flex btn-setters justify-content-center align-items-center btn btn-primary  "
          @click="setBall(colIndex, currentPlayer.color)"
        >
          <font-awesome-layers class="fa-4x">
            <font-awesome-icon icon="angle-down" />
          </font-awesome-layers>
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
