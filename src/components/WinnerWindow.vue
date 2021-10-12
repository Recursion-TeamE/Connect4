<template>
  <div id="overlay">
    <div id="modalWindow" class="col-md-5 col-10">
      <WinnerSVG class="svg-winner" />
      <div class="flex-wrap justify-content-center align-items-center m-3">
        <router-link to="/">
          <button class="btn btn-primary btn-winner m-2 col-md-5 col-10">
            Go to Top
          </button>
        </router-link>
        <button
          @click="clickEvent"
          class="btn btn-primary btn-winner m-2 col-md-5 col-10"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WinnerSVG from "./svg/WinnerSVG.vue";

export default {
  components: {
    WinnerSVG,
  },
  methods: {
    clickEvent: function () {
      this.$emit("from-display-winner");
    },
  },
};
</script>

<style scoped>
.svg-winner {
  filter: drop-shadow(4px 4px 4px #6394ff);
}
</style>