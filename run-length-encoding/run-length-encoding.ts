class RunLengthEncoding {
  static encode(text: string): string {
    const matches = text.match(/([a-zA-Z]|\s)\1*/g);
    if (matches === null) {
      return '';
    }
    return matches.map(match => {
        const char = match.charAt(0);
        return match.length === 1 ? char : match.length + char;
      }).join('');
  }

  static decode(text: string): string {
    const matches = text.match(/(\d*)([a-zA-Z]|\s)/g);
    if (matches === null) {
      return '';
    }
    return matches.map(match => {
        const splitMatch = match.match(/\s+|[a-zA-Z]+|\d+/g);
        if (splitMatch !== null) {
          const count = parseInt(splitMatch[0], 10) || 1;
          const letter = count === 1 ? splitMatch[0] : splitMatch[1];
          return letter.repeat(count);
        }
        return '';
      }).join('');
  }
}

export default RunLengthEncoding;
