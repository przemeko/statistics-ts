const { Readable } = require('stream');

export default class ArrayReader extends Readable {
  // private array: number[][];
  //
  // constructor(array: number[][]) {
  //   super();
  //   // super({ objectModel: true });
  //   this.array = array;
  //   this.index = 0;
  // }
  //
  // _read() {
  //   if (this.index <= this.array.length) {
  //     const chunk = this.array[ this.index ];
  //     console.log(chunk);
  //     this.push(chunk);
  //     this.index++;
  //   } else {
  //     this.push(null);
  //   }
  // }
}
