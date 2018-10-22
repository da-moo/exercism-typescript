export class DiffieHellman {
  private _p: number;
  private _g: number;

  constructor(p: number, g: number) {
    if (p < 1 || g > p) {
      throw new Error('Arguments out of range');
    } else if (!(this.isPrime(p) && this.isPrime(g))) {
      throw new Error('Arguments are not prime');
    }
    this._p = p;
    this._g = g;
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    if (privateKey <= 1) {
      throw new Error('Private key must be greater than 1');
    } else if (privateKey >= this._p) {
      throw new Error(
        'Private key cannot be greater than or equal to modulus parameter p'
      );
    }
    return this._g ** privateKey % this._p;
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return publicKey ** privateKey % this._p;
  }

  private isPrime(num: number): boolean {
    if (num % 2 === 0) {
      return false;
    }
    const limit = Math.sqrt(num);
    for (let start = 2; start <= limit; start += 2) {
      if (num % start === 0) {
        return false;
      }
    }
    return num > 1;
  }
}

export default DiffieHellman;
