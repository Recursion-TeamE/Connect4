import { Ball } from "../model/index";
import { Evaluation } from "@/model/evaluation"
export default {
  /****************************
   * setter
   ****************************/
  setBoardSize(state, { boardSize }) {
    state.boardSize = boardSize;
  },
  setCurrentPlayerIndex(state, { number }) {
    state.currentPlayerIndex = number;
  },
  setCurrentPlayer(state, { player }) {
    state.currentPlayer = player;
  },
  setLastBallPosition(state, { lastBallPosition }) {
    state.lastBallPosition = lastBallPosition;
  },
  setIsFullyEntered(state, { bool }) {
    state.isFullyEnterd = bool;
  },
  setIsDropping(state, { bool }) {
    state.isDropping = bool;
  },
  setTotalSeconds(state, { number }) {
    state.totalSeconds = number;
  },
  setMinutes(state, { string }) {
    state.minutes = string;
  },
  setSeconds(state, { string }) {
    state.seconds = string;
  },
  setIsRunning(state, { bool }) {
    state.isRunning = bool;
  },
  setInterval(state, { interval }) {
    state.interval = interval;
  },
  setWinnerExist(state, { bool }) {
    state.winnerExist = bool;
  },
  setIsDraw(state, { bool }) {
    state.isDraw = bool;
  },
  setPlayers(state, { players }) {
    state.players = players;
    this.commit("setCurrentPlayerIndex", { number: 0 })
    this.commit("setCurrentPlayer", { player: players[0] })
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
      rowIndex--;

      state.winnerExist = new Evaluation(
        state.board,
        rowIndex,
        colIndex,
      ).checkWinner();

      if (state.winnerExist || state.isDraw) return;


      this.commit("turnChange", {
        rowIndex: rowIndex,
        colIndex: colIndex,
        colorString: color,
      });
    }


    this.commit("setIsDropping", { bool: true })
    const l = state.board.length;
    const getBall = ()=> state.board[rowIndex][colIndex];

    //ベースケース
    if (rowIndex >= l || getBall().color !== null) {
      this.commit("setIsDropping", { bool: false })
      nextStep();
      return;
    }

    
    // rowindexが0の時以外は上の色を変える。
    if (rowIndex !== 0) {
      const ballAbove = state.board[rowIndex - 1][colIndex];
      ballAbove.color = null;
    }
    
    const ball = getBall();
    ball.color = color;

    const store = this;
    setTimeout(function () {
      store.commit("setBall", {
        rowIndex: rowIndex + 1,
        colIndex: colIndex,
        color: color,
      });
    }, 300);
  },
  /*************************
   * else
   *************************/
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
};
