import { Ball } from "../model/index"

export default {
    /**
     * @payload {
     *    boardLength: Integer
     * }
     */
    setBoard(state, payload) {
        const array = []
        const l = payload.boardLength

        for (let i = 0; i < l; i++) {
            const row = []
            for (let j = 0; j < l; j++) {
                row.push(new Ball()) //<= yellow
            }
            array.push(row)
        }

        state.board = array

    },
    /**
     * @payload {
     *     colIndex: Integer
     * }
     */
    setBall(state, { rowIndex, colIndex }) {

        const l = state.board.length
        const ball = state.board[rowIndex][colIndex]

        if (ball.color !== null) return
        if (rowIndex >= l) return

        if (rowIndex !== 0) {
            const ballAbove = state.board[rowIndex - 1][colIndex]
            ballAbove.color = null
        }
        ball.color = "red"

        const store = this
        setTimeout(function () {
            store.commit("setBall", { rowIndex: rowIndex + 1, colIndex: colIndex });
        }, 500);

    }
}