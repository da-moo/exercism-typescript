class FlattenArray {
  static flatten(data: any[]): number[] {
    return data.reduce((prev, curr) => {
      if (curr !== undefined) {
        return prev.concat(Array.isArray(curr) ? this.flatten(curr) : curr);
      } else {
        return prev;
      }
    }, []);
  }
}

export default FlattenArray;
