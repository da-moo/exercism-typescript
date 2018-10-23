class CollatzConjecture {
  static steps(num: number, currentStep: number = 0): number {
    if (num <= 0) {
      throw new Error('Only positive numbers are allowed');
    } else if (num === 1) {
      return currentStep;
    } else if (num % 2 === 0) {
      return CollatzConjecture.steps(num / 2, ++currentStep);
    } else {
      return CollatzConjecture.steps(3 * num + 1, ++currentStep);
    }
  }
}

export default CollatzConjecture;
