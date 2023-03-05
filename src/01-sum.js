const readlineSync = require('readline-sync');

const size = parseInt(readlineSync.question('Enter the size of the array: '), 10);
const array = [];

console.log('\nEnter the values of array: ');
for (let i = 0; i < size; i += 1) {
  array.push(parseInt(readlineSync.question(''), 10));
}

const sum = array.reduce((sum, value) => sum + value, 0);

console.log(`\nSum = ${sum}\n\n\n`);
