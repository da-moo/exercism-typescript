export default class Pangram {
  private readonly text: string;
  private static readonly ALPHA_UNIQ_COUNT_PATTERN = /([a-z])(?!.*\1)/g;

  constructor(text: string) {
    this.text = text;
  }

  public isPangram(): boolean {
    return (
      (this.text.toLowerCase().match(Pangram.ALPHA_UNIQ_COUNT_PATTERN) || [])
        .length === 26
    );
  }
}
