export function keep<T>(data: T[], callback: (n: T) => boolean): T[] {
  return data;
}

export function discard<T>(data: T[], callback: (n: T) => boolean): T[] {
  return data;
}
