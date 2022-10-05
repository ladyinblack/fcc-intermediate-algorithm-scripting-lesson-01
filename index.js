// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sum All Numbers in a Range</h1>`;

/** TODO:
 * We'll pass you an array of two numbers.  Return the sum of those two numbers plus the sum of all the numbers between them.  The lowest number will not always come first.
 * For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 * 
 function sumAll(arr) {
   return 1;
 }
 
 sumAll([1, 4]);
 */

function sumAll(arr) {
  let min = 0,
    max = 0;
  let sum = 0;
  if (arr[0] > arr[arr.length - 1]) {
    min = arr[arr.length - 1];
    max = arr[0];
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else if (arr[0] < arr[arr.length - 1]) {
    min = arr[0];
    max = arr[arr.length - 1];
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else {
    sum = arr[0];
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([6, 6]));
