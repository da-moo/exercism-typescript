export default class Pangram {
  private readonly text: string;
  private static readonly REGEX = /([a-z])(?!.*\1)/g;

  constructor(text: string) {
    this.text = text;
  }

  public isPangram(): boolean {
    return (this.text.toLowerCase().match(Pangram.REGEX) || []).length === 26;
  }
}
