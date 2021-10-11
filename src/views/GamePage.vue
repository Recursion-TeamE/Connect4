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
      winnerExist: undefined,
    };
  },
  computed: {
    ...mapState(["currentPlayer", "players", "lastBallPosition", "board"]),
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
    resetBoard: function () {
      this.$store.dispatch("setBoard");
      this.toggleTimer; // gameStartボタンから発火するようにしたい
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

      // console.log(this.board[4][4].color.circle1.colorString == "red");
      const currColor =
        this.board[rowIndex][colIndex].color.circle1.colorString;
      let stack = 1;

      //落ちた時点で上に積み上がっているものは存在しないはずなので、upperCheckしない
      const lowerCheck = () => {
        //縦の下限
        const limit = this.board.length; // rowIndex+3

        for (let row = rowIndex + 1; row < limit; row++) {
          const ball = this.board[row][colIndex];

          if (ball.color.circle1.colorString != currColor) return;
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

      // console.log(this.board[4][4].color.circle1.colorString == "red");
      const currColor =
        this.board[rowIndex][colIndex].color.circle1.colorString;
      let stack = 1;

      const leftCheck = () => {
        const limit = 0; // rowIndex-3

        for (let col = colIndex - 1; col >= limit; col--) {
          const ball = this.board[rowIndex][col];

          if (ball.color === null) return;
          else if (ball.color.circle1.colorString != currColor) return;
          else stack++;
        }
      };
      const rightCheck = () => {
        //縦の下限
        const limit = this.board.length; // rowIndex+3

        for (let col = colIndex + 1; col < limit; col++) {
          const ball = this.board[rowIndex][col];

          if (ball.color === null) return;
          else if (ball.color.circle1.colorString != currColor) return;
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

      const currColor =
        this.board[rowIndex][colIndex].color.circle1.colorString;
      let stack = 1;

      const upperCheck = () => {
        const verticalLimit = 0; // rowIndex+3
        const horizontalLimit = this.board.length; //colIndex+3

        let row = rowIndex - 1;
        let col = colIndex + 1;

        while (col < horizontalLimit && row >= verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color.circle1.colorString != currColor) return;
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
          else if (ball.color.circle1.colorString != currColor) return;
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

      const currColor =
        this.board[rowIndex][colIndex].color.circle1.colorString;
      let stack = 1;

      const upperCheck = () => {
        const verticalLimit = 0; // rowIndex+3
        const horizontalLimit = 0; //colIndex+3

        let row = rowIndex - 1;
        let col = colIndex - 1;

        while (col >= horizontalLimit && row >= verticalLimit) {
          const ball = this.board[row][col];

          if (ball.color === null) return;
          else if (ball.color.circle1.colorString != currColor) return;
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
          else if (ball.color.circle1.colorString != currColor) return;
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
