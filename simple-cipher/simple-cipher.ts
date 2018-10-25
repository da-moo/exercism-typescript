class SimpleCipher {
  private static readonly possible = "abcdefghijklmnopqrstuvwxyz";
  private static readonly randomKeyLength = 100;
  private static readonly firstCharCode = SimpleCipher.possible.charCodeAt(0);
  readonly key: string;

  constructor(key?: string) {
    if ((key && !key.match(/^[a-z]+$/)) || key === "") {
      throw new Error("Bad key");
    }
    this.key = key || this.generateRandomKey();
  }

  encode(text: string): string {
    return this.applyCipher(text, "encode");
  }

  decode(text: string): string {
    return this.applyCipher(text, "decode");
  }

  private generateRandomKey(): string {
    return Array.from(Array(SimpleCipher.randomKeyLength))
      .map(() => {
        const charPosition = Math.floor(
          Math.random() * SimpleCipher.possible.length
        );
        return SimpleCipher.possible[charPosition];
      })
      .join("");
  }

  private applyCipher(text: string, type: "encode" | "decode"): string {
    const mod = (n: number, m: number): number => ((n % m) + m) % m;

    const calculateShiftAmount = (stringIndex: number): number =>
      this.key.charCodeAt(stringIndex % this.key.length) -
      SimpleCipher.firstCharCode;

    const calculateCharCode = (char: string, shiftAmount: number): number =>
      mod(
        char.charCodeAt(0) - SimpleCipher.firstCharCode + shiftAmount,
        SimpleCipher.possible.length
      ) + SimpleCipher.firstCharCode;

    const shiftDirection = type === "decode" ? -1 : 1;

    return Array.from(text)
      .map((char, index) => {
        const shiftAmount = calculateShiftAmount(index) * shiftDirection;
        return String.fromCharCode(calculateCharCode(char, shiftAmount));
      })
      .join("");
  }
}

export default SimpleCipher;
