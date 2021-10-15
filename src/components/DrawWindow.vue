<template>
  <div id="overlay">
    <div id="modalWindow" class="col-md-5 col-10">
      <p class="draw-font">It's a draw...</p>
      <div class="flex-wrap justify-content-center align-items-center m-3">
        <router-link to="/">
          <button
            @click="initializeGame"
            class="btn btn-primary btn-winner m-2 col-md-5 col-10"
          >
            Go to Top
          </button>
        </router-link>
        <button
          @click="retryGame"
          class="btn btn-primary btn-winner m-2 col-md-5 col-10"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setNewGame: function () {
      this.$store.dispatch("setNewGame");
    },
    retryGame: function () {
      this.$store.dispatch("setWinnerExist", { bool: false});
      this.$store.dispatch("setIsDraw", { bool: false});
      this.$store.dispatch("setBoard");
      this.$store.dispatch("toggleTimer");
    },
  },
};
</script>

<style scoped>
.draw-font {
  font-size: 2rem;
  color: #0056d8;
  filter: drop-shadow(3px 3px 3px #6394ff);
}
</style>
