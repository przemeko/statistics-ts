import Operation from './Operation';

export default class Min implements Operation {
  private readonly vectors: number[];

  constructor() {
    this.vectors = [];
  }

  public calculationStep(row: number[]): void {
    for (let i = 0; i < row.length; i++) {
      if (this.vectors[ i ] === undefined) {
        this.vectors[ i ] = row[ i ];
      }

      if (row[ i ] < this.vectors[ i ]) {
        this.vectors[ i ] = row[ i ];
      }
    }
  }

  public getResult(): number[] {
    return this.vectors;
  }
}
