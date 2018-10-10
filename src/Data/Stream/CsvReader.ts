import fs, { ReadStream } from 'fs';
import { Transform, Writable } from 'stream';
import fastCsv from 'fast-csv';

export default class CsvReader {
  private fileStream: ReadStream;
  private readonly parser: Transform;

  constructor(filepath: string) {
    this.fileStream = fs.createReadStream(filepath);
    this.parser = fastCsv.parse();
  }

  pipe<T extends Transform>(operation: T): T {
    return this.fileStream
      .pipe(this.parser)
      .pipe(operation);
  }
}
