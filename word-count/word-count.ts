export default class Words {
  public count(text: string): Map<string, number> {
    const dict = new Map<string, number>();
    text
      .trim()
      .split(/\s+/)
      .forEach(token => {
        const normalizedString = token.toLocaleLowerCase();
        const count = dict.get(normalizedString);
        if (count === undefined) {
          dict.set(normalizedString, 1);
        } else {
          dict.set(normalizedString, count + 1);
        }
      });
    return dict;
  }
}
