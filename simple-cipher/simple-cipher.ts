class SimpleCipher {
  private static readonly possible = "abcdefghijklmnopqrstuvwxyz";
  private static readonly randomKeyLength = 100;
  private static readonly firstCharCode = SimpleCipher.possible.charCodeAt(0);
  private _key: string;

  constructor(key?: string) {
    if ((key && !key.match(/^[a-z]+$/)) || key === "") {
      throw new Error("Bad key");
    }
    this._key = key || this.generateRandomKey();
  }

  get key(): string {
    return this._key;
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

  private applyCipher(text: string, type: string): string {
    const mod = (n: number, m: number): number => {
      return ((n % m) + m) % m;
    };

    const calculateShiftAmount = (stringIndex: number): number => {
      return (
        this._key.charCodeAt(stringIndex % this._key.length) -
        SimpleCipher.firstCharCode
      );
    };

    const calculateCharCode = (char: string, shiftAmount: number): number => {
      return (
        mod(
          char.charCodeAt(0) - SimpleCipher.firstCharCode + shiftAmount,
          SimpleCipher.possible.length
        ) + SimpleCipher.firstCharCode
      );
    };

    const returnStringCodes = Array<number>(text.length);
    for (const [index, char] of Array.from(text).entries()) {
      let shiftAmount = calculateShiftAmount(index);
      shiftAmount = type === "decode" ? 0 - shiftAmount : shiftAmount;
      returnStringCodes[index] = calculateCharCode(char, shiftAmount);
    }

    return String.fromCharCode(...returnStringCodes);
  }
}

export default SimpleCipher;
