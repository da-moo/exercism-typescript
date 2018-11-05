class Bob {
  hey(text: string): string {
    if (text.match(/[A-Z]{4,}!*|[A-Z]+!+/)) {
      return 'Whoa, chill out!';
    } else if (text.match(/\?+$/)) {
      return 'Sure.';
    } else if (text.match(/^\s*$/)) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  }
}

export default Bob;
