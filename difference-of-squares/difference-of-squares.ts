export default class Squares {
  private num: number;

  constructor(num: number) {
    this.num = num;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let index = 1; index <= this.num; index++) {
      sum += index;
    }
    return Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let index = 1; index <= this.num; index++) {
      sum += Math.pow(index, 2);
    }
    return sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
