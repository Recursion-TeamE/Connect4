import { Ball } from "../model/index";
import { lastBallPosition } from "../model/index";

export default {
	/**
	 * @payload {
	 *    boardLength: Integer
	 * }
	 */
	setBoard(state, payload) {
		const array = [];
		const l = payload.boardLength;

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

		if (rowIndex >= l) {
			this.commit("turnChange",
				{
					rowIndex: rowIndex - 1,
					colIndex: colIndex,
					colorString: color.circle1.colorString
				});
			return;
		}

		const ball = state.board[rowIndex][colIndex];

		//ボールがすでにある時return
		if (ball.color !== null) {
			this.commit("turnChange", {
				rowIndex: rowIndex - 1,
				colIndex: colIndex,
				colorString: color.circle1.colorString
			});
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
		}, 500);
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
		state.isFullyEnterd = true;
		return;
	},
};
