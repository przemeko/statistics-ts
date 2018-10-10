import CsvReader from './Data/Stream/CsvReader';
import Min from './Math/Min';
import Max from './Math/Max';
import OperationDuplex from './Math/Stream/OperationDuplex';

const csvReader = new CsvReader('./test.csv');
const minWriter = new OperationDuplex(new Min());
const maxWriter = new OperationDuplex(new Max());

csvReader
  .pipe(minWriter)
  .pipe(maxWriter)
  .on('finish', () => {
    console.log('min:', minWriter.getResult());
    console.log('max:', maxWriter.getResult());
  });

// const arrayReader = new ArrayReader([ [ 1, 2, 3 ], [ 4, 5, 6 ] ]);
// const minWriter = new OperationDuplex(new Min());
// const maxWriter = new OperationDuplex(new Max());
//
// arrayReader
//   .pipe(minWriter)
//   .pipe(maxWriter)
//   .on('finish', () => {
//     console.log('min:', minWriter.getResult());
//     console.log('max:', maxWriter.getResult());
//   });
