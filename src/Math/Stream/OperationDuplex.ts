import { Duplex, Writable, PassThrough } from 'stream';
import Operation from '../Operation';

export default class OperationDuplex extends PassThrough {
  private operation: Operation;

  constructor(operation: Operation) {
    super({ objectMode: true });

    this.operation = operation;
  }

  _write(row: number[], encoding: string, callback: () => void) {
    this.operation.calculationStep(row);
    this.push(row);
    callback();
  }

  public getResult(): number[] {
    return this.operation.getResult();
  }
}
