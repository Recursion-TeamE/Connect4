<template>
  <div
    v-if="isPlayable()"
    class="row align-items-center justify-content-around h-100"
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
      <p>{{ lastBallPosition.rowIndex }}</p>
      <p>{{ lastBallPosition.colIndex }}</p>
      <p>{{ lastBallPosition.color }}</p>

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

    <button @click="verticalEvaluation">vertical</button>
    <button @click="horizontalEvaluation">horizontal</button>
    <button @click="rightDiagonalEvaluation">rightD</button>
    <button @click="leftDiagonalEvaluation">leftD</button>
    <button @click="openWinnerWindow">Winner</button>
    <button @click="openDrawWindow">Draw</button>
    <WinnerWindow
      v-if="winnerExist"
      @from-display-winner="closeWinnerWindow"
    />
    <DrawWindow v-if="isDraw" @from-draw-window="closeDrawWindow" />
  </div>

  <div
    v-else
    class="vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="">
      <h2>Sorry, but you have to go to setting page</h2>
    </div>
    <div class="d-flex justify-content-center align-items-center h-50">
      <div class="btn-container">
        <router-link to="/setting">
          <button class="btn btn-primary">Setting Page</button>
        </router-link>
      </div>
    </div>
  </div>
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
      winnerExist: undefined,
      isDraw: undefined, // 引き分けかどうか
    };
  },
  computed: {
    ...mapState([
      "currentPlayer",
      "players",
      "lastBallPosition",
      "board",
      "minutes",
      "seconds",
    ]),
    // evaluationMessage(){
    //   if(this.winnerExist){
    //     console.log("Display Winner");
    //   }
    //   else {
    //     console.log("It's a draw");
    //   }
    // },
  },
  mounted() {
    window.addEventListener("load", this.toggleTimer);
  },
  methods: {
    openWinnerWindow: function () {
      this.winnerExist = true;
    },
    closeWinnerWindow: function () {
      this.winnerExist = false;
      this.resetBoard();
    },
    openDrawWindow: function () {
      this.isDraw = true;
    },
    closeDrawWindow: function () {
      this.isDraw = false;
      this.resetBoard();
    },
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
    /**
     * 勝敗チェック
     */
    checkWinner() {
      return (
        this.verticalEvaluation ||
        this.horizontalEvaluation ||
        this.rightDiagonalEvaluation ||
        this.leftDiagonalEvaluation
      );
    },
    check(n) {
      console.log(n);
      if (n >= 4) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
    verticalEvaluation() {
      const rowIndex = this.lastBallPosition.rowIndex;
      const colIndex = this.lastBallPosition.colIndex;

      const currColor = this.board[rowIndex][colIndex].color;
      let stack = 1;

      //落ちた時点で上に積み上がっているものは存在しないはずなので、upperCheckしない
      const lowerCheck = () => {
        //縦の下限
        const limit = this.board.length; // rowIndex+3

        for (let row = rowIndex + 1; row < limit; row++) {
          const ball = this.board[row][colIndex];

          if (ball.color != currColor) return;
          else stack++;
        }
      };

      lowerCheck();

      if (stack === 4) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
    horizontalEvaluation() {
      const rowIndex = this.lastBallPosition.rowIndex;
      const colIndex = this.lastBallPosition.colIndex;

      const currColor = this.board[rowIndex][colIndex].color;
      let stack = 1;

      const leftCheck = () => {
        const limit = 0; // rowIndex-3

        for (let col = colIndex - 1; col >= limit; col--) {
          const ball = this.board[rowIndex][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;
        }
      };
      const rightCheck = () => {
        //縦の下限
        const limit = this.board.length; // rowIndex+3

        for (let col = colIndex + 1; col < limit; col++) {
          const ball = this.board[rowIndex][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;
        }
      };

      leftCheck();
      rightCheck();

      this.check(stack);
    },

    /**
     *  //右斜め上 (/)
     *
     * ________
     *         |
     *         |
     *         |
     *
     * */
    rightDiagonalEvaluation() {
      const rowIndex = this.lastBallPosition.rowIndex;
      const colIndex = this.lastBallPosition.colIndex;

      const currColor = this.board[rowIndex][colIndex].color;
      let stack = 1;

      const upperCheck = () => {
        const verticalLimit = 0; // rowIndex+3
        const horizontalLimit = this.board.length; //colIndex+3

        let row = rowIndex - 1;
        let col = colIndex + 1;

        while (col < horizontalLimit && row >= verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;

          row--;
          col++;
        }
      };

      const lowerCheck = () => {
        const verticalLimit = this.board.length; // rowIndex+3
        const horizontalLimit = 0; //colIndex+3

        let row = rowIndex + 1;
        let col = colIndex - 1;

        while (col >= horizontalLimit && row < verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;

          row++;
          col--;
        }
      };

      upperCheck();
      lowerCheck();
      this.check(stack);
    },
    /**
     *  //右ななめ下(\)
     */
    leftDiagonalEvaluation() {
      const rowIndex = this.lastBallPosition.rowIndex;
      const colIndex = this.lastBallPosition.colIndex;

      const currColor = this.board[rowIndex][colIndex].color;
      let stack = 1;

      const upperCheck = () => {
        const verticalLimit = 0; // rowIndex+3
        const horizontalLimit = 0; //colIndex+3

        let row = rowIndex - 1;
        let col = colIndex - 1;

        while (col >= horizontalLimit && row >= verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;

          row--;
          col--;
        }
      };

      const lowerCheck = () => {
        const verticalLimit = this.board.length; // rowIndex+3
        const horizontalLimit = this.board.length; //colIndex+3

        let row = rowIndex + 1;
        let col = colIndex + 1;

        while (col < horizontalLimit && row < verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color != currColor) return;
          else stack++;

          row++;
          col++;
        }
      };

      upperCheck();
      lowerCheck();
      this.check(stack);
    },
  },
};
</script>
