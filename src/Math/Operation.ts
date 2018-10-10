export default interface Operation {
  calculationStep(row: number[]): void;
  getResult(): number[];
}
