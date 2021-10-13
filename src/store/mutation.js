import { Ball } from "../model/index";
import { lastBallPosition } from "../model/index";

export default {

	setBoardSize(state, { boardSize }) {
		state.boardSize = boardSize;
	},
	/**
	 * @payload {
	 *    boardSize: Integer
	 * }
	 */
	setBoard(state) {

		const array = [];
		const l = state.boardSize;

		for (let i = 0; i < l; i++) {
			const row = [];
			for (let j = 0; j < l; j++) {
				row.push(new Ball()); //<= yellow
			}
			array.push(row);
		}

		state.board = array;
	},
	/**
	 * @payload {
	 *     colIndex: Integer
	 * }
	 */
	setBall(state, { rowIndex, colIndex, color }) {
		const l = state.board.length;
		state.isDropping = true;

		if (rowIndex >= l) {
			this.commit("turnChange",
				{
					rowIndex: rowIndex - 1,
					colIndex: colIndex,
					colorString: color
				});
			state.isDropping = false;
			return;
		}

		const ball = state.board[rowIndex][colIndex];

		//ボールがすでにある時return
		if (ball.color !== null) {
			this.commit("turnChange", {
				rowIndex: rowIndex - 1,
				colIndex: colIndex,
				colorString: color
			});
			state.isDropping = false;
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
	/**
	 * @payload {
	 *     players: Array
	 * }
	 */
	setPlayers(state, { players }) {
		state.players = players;
		state.currentPlayer = players[0];
		state.currentPlayerIndex = 0;
	},

	turnChange(state, { rowIndex, colIndex, colorString }) {
		//lastballposition を保存する
		state.lastBallPosition = new lastBallPosition(rowIndex, colIndex, colorString);

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
		state.isFullyEntered = true;
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
		

		// if (state.isRunning) clearInterval(state.interval);
		// else state.interval = setInterval(incrementTime, 1000);
		
		// state.isRunning = !state.isRunning;
	},

};
