class BracketPush {
  private static readonly PAIRS = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  private readonly text: string;

  constructor(text: string) {
    this.text = text;
  }

  public isPaired(): boolean {
    const stack = new Array<string>();

    for (const char of this.text) {
      if (BracketPush.PAIRS.has(char)) {
        stack.push(char);
      } else if (Array.from(BracketPush.PAIRS.values()).includes(char)) {
        const lastBracket = stack[stack.length - 1];
        if (char !== BracketPush.PAIRS.get(lastBracket)) {
          return false;
        } else if (char === BracketPush.PAIRS.get(lastBracket)) {
          stack.pop();
        }
      }
    }
    return stack.length === 0;
  }
}

export default BracketPush;
