class SimpleCipher {
  private possible = 'abcdefghijklmnopqrstuvwxyz';
  private randomKeyLength = 100;
  private firstCharCode = this.possible.charCodeAt(0);
  private _key: string;

  constructor(key?: string) {
    if (key !== undefined) {
      if (key.match(/^[a-z]+$/) === null) {
        throw new Error('Bad key');
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
    return this.applyCipher(text, 'encode');
  }

  decode(text: string): string {
    return this.applyCipher(text, 'decode');
  }

  private generateRandomKey(): string {
    const stringBuilder: string[] = Array(this.randomKeyLength);
    for (let i = 0; i < this.randomKeyLength; i++) {
      const charPosition = Math.floor(Math.random() * this.possible.length);
      const newChar = this.possible.charAt(charPosition);
      stringBuilder[i] = newChar;
    }
    return stringBuilder.join('');
  }

  private applyCipher(text: string, type: string): string {
    const mod = (n: number, m: number): number => {
      return ((n % m) + m) % m;
    };

    const calculateShiftAmount = (stringIndex: number): number => {
      return (
        this._key.charCodeAt(stringIndex % this._key.length) -
        this.firstCharCode
      );
    };

    const calculateCharCode = (char: string, shiftAmount: number): number => {
      return (
        mod(
          char.charCodeAt(0) - this.firstCharCode + shiftAmount,
          this.possible.length
        ) + this.firstCharCode
      );
    };

    const returnStringCodes = Array<number>(text.length);
    for (const [index, char] of Array.from(text).entries()) {
      let shiftAmount = calculateShiftAmount(index);
      shiftAmount = type === 'decode' ? 0 - shiftAmount : shiftAmount;
      returnStringCodes[index] = calculateCharCode(char, shiftAmount);
    }

    return String.fromCharCode(...returnStringCodes);
  }
}

export default SimpleCipher;
