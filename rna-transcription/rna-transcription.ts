class Transcriptor {
  private static readonly RNA_DICT = new Map<string, string>([
    ['C', 'G'],
    ['G', 'C'],
    ['A', 'U'],
    ['T', 'A']
  ]);

  toRna(text: string): string {
    if (text.match(/^[GCTA]+$/g)) {
      return Array.from(text)
        .map(element => Transcriptor.RNA_DICT.get(element))
        .join('');
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
}

export default Transcriptor;
