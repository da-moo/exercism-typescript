export default class Hamming {
  public compute(strand1: string, strand2: string): number {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return Array.from(strand1)
      .map((element, index) => [element, strand2[index]])
      .reduce((count, current) => {
        return current[0] !== current[1] ? ++count : count;
      }, 0);
  }
}
