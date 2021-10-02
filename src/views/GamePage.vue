<template>
  <div class="row align-items-center justify-content-around h-100">
    <div class="col-md-4 col-sm-3 display-players pb-5">
      <div class="players-turn">
        <h2 class="players-turn-font">{{ currentPlayer.name }}'s turn</h2>
      </div>
      <div v-for="(player, index) in players" :key="player.index">
        <div class="row justify-content-center">
          <p>Player {{ index + 1 }}: {{ player.name }}</p>
          <TemplateBallSVG class="mini-ball mx-2" :color="player.color" />
        </div>
      </div>
    </div>
    <div
      class="
        col-md-4 col-sm-3
        d-flex
        flex-column
        justify-content-center
        align-items-center
        p-1
      "
    >
      <p>Click buttons to play</p>
      <BallSetters />
      <Board class="bg-color mb-sm-2" />
    </div>
    <div
      class="
        col-md-4 col-sm-3
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <div class="d-flex flex-column display-function-buttons pb-5">
        <div class="timer-decoration">
          <font-awesome-icon icon="hourglass-half" />
          <p>{{ minutes }}:{{ seconds }}</p>
        </div>
        <button @click="resetData()" class="btn btn-primary">
          <font-awesome-icon icon="redo-alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
import BallSetters from "@/components/BallSetters.vue";
import TemplateBallSVG from "@/components/svg/TemplateBallSVG.vue";
import { mapState } from "vuex";

export default {
  components: {
    Board,
    BallSetters,
    TemplateBallSVG,
  },
  data() {
    return {
      totalSeconds: 0,
      minutes: "00",
      seconds: "00",
      isRunning: false,
      interval: null,
    };
  },
  computed: {
    ...mapState(["currentPlayer", "players"]),
  },
  mounted() {
    window.addEventListener("load", this.toggleTimer);
  },
  methods: {
    resetData: function () {
      window.location.reload();
    },
    toggleTimer: function () {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning;
    },
    incrementTime() {
      ++this.totalSeconds;
      this.minutes = this.pad(parseInt(this.totalSeconds / 60)).toString();
      this.seconds = this.pad(this.totalSeconds % 60).toString();
    },
    pad(val) {
      let valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    },
  },
};
</script>
