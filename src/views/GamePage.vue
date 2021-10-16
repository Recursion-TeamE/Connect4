<template>
  <main
    v-if="isPlayable()"
    class="row align-items-center justify-content-around vh-100"
  >
    <div class="col-md-4 col-sm-3 display-players pb-5">
      <div class="players-turn my-4">
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
        <button @click="resetBoard()" class="btn btn-primary">
          <font-awesome-icon icon="redo-alt" />
        </button>
      </div>
    </div>

    <!-- <button @click="verticalEvaluation">vertical</button>
    <button @click="horizontalEvaluation">horizontal</button>
    <button @click="rightDiagonalEvaluation">rightD</button>
    <button @click="leftDiagonalEvaluation">leftD</button>
    <button @click="openWinnerWindow">Winner</button>
    <button @click="openDrawWindow">Draw</button> -->
    <WinnerWindow v-if="winnerExist" />
    <DrawWindow v-if="isDraw" />
  </main>

  <main
    v-else
    class="vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="">
      <h2>Sorry, but you have to go to setting page</h2>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="btn-container">
        <router-link to="/setting">
          <button class="btn btn-primary">Setting Page</button>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import Board from "@/components/Board.vue";
import BallSetters from "@/components/BallSetters.vue";
import TemplateBallSVG from "@/components/svg/TemplateBallSVG.vue";

import { mapState } from "vuex";

import { Config } from "@/config";
import WinnerWindow from "../components/WinnerWindow.vue";
import DrawWindow from "../components/DrawWindow.vue";

export default {
  components: {
    Board,
    BallSetters,
    TemplateBallSVG,
    WinnerWindow,
    DrawWindow,
  },
  data() {
    return {
      stack: undefined,
    };
  },
  computed: {
    ...mapState([
      "currentPlayer",
      "players",
      "board",
      "minutes",
      "seconds",
      "winnerExist",
      "isDraw",
    ]),
  },
  mounted() {
    window.addEventListener("load", this.toggleTimer);
  },
  methods: {
    isPlayable: function () {
      return (
        this.$store.state.boardSize >= Config.board.size.min &&
        this.$store.state.players.length >= Config.players.number.min
      );
    },
    resetBoard: function () {
      this.$store.dispatch("setBoard");
      this.$store.dispatch("toggleTimer");
    },
  },
};
</script>
