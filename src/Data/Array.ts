export default class Array {
  private readonly array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  public* get(): Iterator<number> {
    const len = this.array.length;
    for (let i = 0; i < len; i++) {
      yield this.array[ i ];
    }
  }
}
