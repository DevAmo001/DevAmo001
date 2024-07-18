import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
} // basic test-case

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
} // edge test-case

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
} //edge test-case

console.log('rounds up a number less than 5 to the nearest cents');

if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
} // edge test-case