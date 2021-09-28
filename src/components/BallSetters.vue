<template>
  <div>
    <div class="d-flex">
      <div class="" v-for="(col, colIndex) in board" v-bind:key="colIndex">
        <button class="btn btn-primary ball" @click="setBall(colIndex)">
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
    ...mapState(["board"]),
  },
  methods: {
    setBall: function (colIndex) {
      this.$store.dispatch("setBall", {
        colIndex: colIndex,
        rowIndex: 0,
      });
    },
  },
};
</script>   
