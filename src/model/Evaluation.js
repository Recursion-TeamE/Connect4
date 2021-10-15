import { Config } from "@/config";
import { lastBallPosition } from "@/model/index";

export class Evaluation {
  constructor(board, rowIndex, colIndex) {
    this.board = board;
    this.currentBall = board[rowIndex][colIndex];
    this.lastBallPosition = new lastBallPosition(rowIndex, colIndex, this.currentBall.color);
    this.stack = 1;
  }
  checkWinner() {
    const rowIndex = this.lastBallPosition.rowIndex;
    const colIndex = this.lastBallPosition.colIndex;
    return (
      this.verticalEvaluation(rowIndex, colIndex) ||
      this.horizontalEvaluation(rowIndex, colIndex) ||
      this.rightDiagonalEvaluation(rowIndex, colIndex) ||
      this.leftDiagonalEvaluation(rowIndex, colIndex)
    );
  }
  check(n) {
    console.log(n);
    if (n >= Config.board.size.min) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
  isBothSameColor(ball1, ball2) {
    if (
      ball1.color === null ||
      ball2.color === null ||
      ball1.color != ball2.color
    )
      return false;
    else return true;
  }
  verticalEvaluation(rowIndex, colIndex) {
    this.stack = 1;

    //落ちた時点で上に積み上がっているものは存在しないはずなので、upperCheckしない
    const lowerCheck = () => {
      //縦の下限
      const limit = this.board.length; // rowIndex+3

      for (let row = rowIndex + 1; row < limit; row++) {
        const ball = this.board[row][colIndex];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
      }
    };

    lowerCheck();

    return this.check(this.stack);
  }
  horizontalEvaluation(rowIndex, colIndex) {
    this.stack = 1;

    const leftCheck = () => {
      const limit = 0; // rowIndex-3
      for (let col = colIndex - 1; col >= limit; col--) {
        const ball = this.board[rowIndex][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
      }
    };
    const rightCheck = () => {
      //縦の下限
      const limit = this.board.length; // rowIndex+3
      for (let col = colIndex + 1; col < limit; col++) {
        const ball = this.board[rowIndex][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
      }
    };

    leftCheck();
    rightCheck();

    return this.check(this.stack);
  }

  /**
   *  //右斜め上 (/)
   * */
  rightDiagonalEvaluation(rowIndex, colIndex) {
    this.stack = 1;

    const upperCheck = () => {
      const verticalLimit = 0; // rowIndex+3
      const horizontalLimit = this.board.length; //colIndex+3

      let row = rowIndex - 1;
      let col = colIndex + 1;

      while (col < horizontalLimit && row >= verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
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

        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;

        row++;
        col--;
      }
    };

    upperCheck();
    lowerCheck();
    return this.check(this.stack);
  }
  /**
   *  //右ななめ下(\)
   */
  leftDiagonalEvaluation(rowIndex, colIndex) {
    this.stack = 1;

    const upperCheck = () => {
      const verticalLimit = 0; // rowIndex+3
      const horizontalLimit = 0; //colIndex+3

      let row = rowIndex - 1;
      let col = colIndex - 1;

      while (col >= horizontalLimit && row >= verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
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
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        row++;
        col++;
      }
    };

    upperCheck();
    lowerCheck();
    return this.check(this.stack);
  }
}