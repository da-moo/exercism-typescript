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
    const matches = text.match(/(\d*)([a-zA-Z]|\s)/);
    if (matches === null) {
      return '';
    }
    return text;
  }
}

export default RunLengthEncoding;
