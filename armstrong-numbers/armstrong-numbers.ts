export default class ArmstrongNumbers {
  static isArmstrongNumber(num: number): Boolean {
    const arrayOfDigits = Array.from(num.toString(), x => parseInt(x));
    const numOfDigits = arrayOfDigits.length;
    const armstrong = arrayOfDigits.reduce((prev, curr) => {
      return prev + Math.pow(curr, numOfDigits);
    }, 0);
    return num === armstrong;
  }
}
