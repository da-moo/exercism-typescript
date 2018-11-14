class ProteinTranslation {
  private static readonly TRANSLATION_MAP = new Map<string, string>([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"],
    ["UUC", "Phenylalanine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["UCU", "Serine"],
    ["UCC", "Serine"],
    ["UCA", "Serine"],
    ["UCG", "Serine"],
    ["UAU", "Tyrosine"],
    ["UAC", "Tyrosine"],
    ["UGU", "Cysteine"],
    ["UGC", "Cysteine"],
    ["UGG", "Tryptophan"],
    ["UAA", "STOP"],
    ["UAG", "STOP"],
    ["UGA", "STOP"]
  ]);

  static proteins(sequence: string): string[] {
    const proteins: string[] = [];
    for (const codon of sequence.match(/.{3}/g) || []) {
      const protein = this.TRANSLATION_MAP.get(codon) || "";
      if (protein === "STOP") {
        break;
      } else if (this.TRANSLATION_MAP.has(codon)) {
        proteins.push(protein);
      }
    }
    return proteins;
  }
}

export default ProteinTranslation;
