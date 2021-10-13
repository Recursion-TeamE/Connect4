import { Ball } from "../model/index";
import { Evaluation } from "@/model/evaluation"
export default {
  /**
   * setter
   */
  setBoardSize(state, { boardSize }) {
    state.boardSize = boardSize;
  },
  initializeGame(state) {
    state.players = []
    state.board = []
    state.boardSize = 0

    state.currentPlayerIndex = 0
    state.currentPlayer = {}
    state.lastBallPosition = {}

    state.isFullyEnterd = false
    state.isDropping = false

    state.totalSeconds = 0
    state.minutes = "00"
    state.seconds = "00"
    state.isRunning = false
    state.interval = null

    this.commit("initEvaluationStatus")
  },

  initEvaluationStatus(state) {
    state.winnerExist = false;
    state.isDraw = false;
  },
  setBoard(state) {

    const array = [];
    const l = state.boardSize;

    for (let i = 0; i < l; i++) {
      const row = [];
      for (let j = 0; j < l; j++) {
        row.push(new Ball());
      }
      array.push(row);
    }

    state.board = array;
  },
  setBall(state, { rowIndex, colIndex, color }) {

    const nextStep = () => {

      // //lastballposition を保存する
      // state.lastBallPosition = new lastBallPosition(rowIndex, colIndex, color);
      rowIndex--

      state.winnerExist = new Evaluation(
        state.board,
        rowIndex,
        colIndex,
      ).checkWinner();

      //winnerExsitはGamePageのv-ifで使われてる。
      if (state.winnerExist) {
        //drawの処理
        return;
      }
      else if (state.isDraw) {
        return;
      }


      this.commit("turnChange", {
        rowIndex: rowIndex,
        colIndex: colIndex,
        colorString: color
      });
      state.isDropping = false;
    }


    const l = state.board.length;
    state.isDropping = true;

    if (rowIndex >= l) {
      nextStep()
      return;
    }

    const ball = state.board[rowIndex][colIndex];

    //ボールがすでにある時return
    if (ball.color !== null) {
      nextStep()
      return;
    }

    // rowindexが0の時以外は上の色を変える。
    if (rowIndex !== 0) {
      const ballAbove = state.board[rowIndex - 1][colIndex];
      ballAbove.color = null;
    }

    ball.color = color;

    const store = this;

    console.log(rowIndex);

    setTimeout(function () {
      store.commit("setBall", {
        rowIndex: rowIndex + 1,
        colIndex: colIndex,
        color: color,
      });
    }, 300);
  },
  setPlayers(state, { players }) {
    state.players = players;
    state.currentPlayer = players[0];
    state.currentPlayerIndex = 0;
  },

  /**
   * else
   */
  turnChange(state) {

    state.currentPlayerIndex++;

    const l = state.players.length;

    if (state.currentPlayerIndex >= l) {
      state.currentPlayerIndex = 0;
    }

    state.currentPlayer = state.players[state.currentPlayerIndex];
  },
  checkUnsubmittedItems(state, { players }) {
    for (let i = 0; i < players.length; i++) {
      if (
        players[i].name === "" &&
        players[i].color === undefined
      ) {
        alert("Please enter your name and color!");
        return;
      } else if (players[i].name === "") {
        alert("Please enter your name!");
        return;
      } else if (players[i].color === undefined) {
        alert("Please enter your color!");
        return;
      }
    }
    state.isFullyEnterd = true;
    return;
  },
  toggleTimer(state) {

    state.totalSeconds = 0;
    state.minutes = "00"
    state.seconds = "00"

    const pad = (val) => {
      let valString = val + "";
      if (valString.length < 2) return "0" + valString;
      else return valString;
    }

    const incrementTime = () => {
      ++state.totalSeconds;
      state.minutes = pad(parseInt(state.totalSeconds / 60)).toString();
      state.seconds = pad(state.totalSeconds % 60).toString();
    }

    clearInterval(state.interval);
    state.interval = setInterval(incrementTime, 1000);

  },
  openWinnerWindow(state) {
    state.winnerExist = true;
  },
  closeWinnerWindow(state) {
    state.winnerExist = false;
  },
  openDrawWindow(state) {
    state.isDraw = true;
  },
  closeDrawWindow(state) {
    state.isDraw = false;
  }

};
