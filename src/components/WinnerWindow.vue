<template>
  <div id="overlay">
    <div id="modalWindow" class="col-md-5 col-10">
      <WinnerSVG class="svg-winner" :winner="currentPlayer.name" />
      <div class="flex-wrap justify-content-center align-items-center m-3">
        <router-link to="/">
          <button
            @click="setNewGame"
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
import WinnerSVG from "./svg/WinnerSVG.vue";
import { mapState } from "vuex";

export default {
  components: {
    WinnerSVG,
  },
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
  computed: {
    ...mapState(["currentPlayer"]),
  },
};
</script>

<style scoped>
.svg-winner {
  filter: drop-shadow(4px 4px 4px #6394ff);
}
</style>