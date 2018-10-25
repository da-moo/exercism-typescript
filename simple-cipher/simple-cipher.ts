class SimpleCipher {
  private static readonly possible = "abcdefghijklmnopqrstuvwxyz";
  private static readonly randomKeyLength = 100;
  private static readonly firstCharCode = SimpleCipher.possible.charCodeAt(0);
  private _key: string;

  constructor(key?: string) {
    if (key !== undefined) {
      if (key.match(/^[a-z]+$/) === null) {
        throw new Error("Bad key");
      }
      this._key = key;
    } else {
      this._key = this.generateRandomKey();
    }
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
    const stringBuilder: string[] = Array(SimpleCipher.randomKeyLength);
    for (let i = 0; i < SimpleCipher.randomKeyLength; i++) {
      const charPosition = Math.floor(
        Math.random() * SimpleCipher.possible.length
      );
      const newChar = SimpleCipher.possible.charAt(charPosition);
      stringBuilder[i] = newChar;
    }
    return stringBuilder.join("");
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
