export function keep<T>(data: T[], callback: (n: T) => boolean): T[] {
  return data.reduce((prev, curr) => {
    if (callback(curr)) {
      prev.push(curr);
    }
    return prev;
  }, new Array<T>());
}

export function discard<T>(data: T[], callback: (n: T) => boolean): T[] {
  return data.reduce((prev, curr) => {
    if (!callback(curr)) {
      prev.push(curr);
    }
    return prev;
  }, new Array<T>());
}
