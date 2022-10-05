## ALTERNATE SOLUTIONS

### Solution 1
```js
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

sumAll([1, 4]);
```

### Code Explanation
- First create a variable to store the max number between two.
- The same as before for the smallest number.
- We create an accumulator variable to add the numbers.

Since the numbers might not be always in order, using `max()` and `min()` will help organize.

### REFERENCE LINKS
- [`Math.max()`](http://forum.freecodecamp.com/t/javascript-math-max/14682)
- [`Math.min()`](http://forum.freecodecamp.com/t/javascript-math-min/14684)
- [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)


### Solution 2
```js
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
    
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
    
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};
```

### Code Explanation
- The formula for calculating the sum of a continuous range is `(startNum + endNum) * numCount / 2`.
- `arr[0]` and `arr[1]` can either be `startNum` or `endNum`, order doesn't matter.
- We can get the count of numbers in range by `Math.abs(arr[0] - arr[1]) + 1`.
- Applying the formula by plugging in the numbers.

### REFERENCE LINKS
- [Arithmetic Progression summing formula](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
- [ES6 arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


### Solution 3
```js
function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

sumAll([1, 4]);
```

### Code Explanation
- Creating a variable `sum` to store the sum of the elements.
- Starting iteration of the loop from `min` element of given array and stopping when it reaches the `max` element.
- Using a spread operator (`...arr`) allows passing the actual array to the function instead of one-by-one elements.

### REFERENCE LINKS
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Using Spread Operator in `Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)


### Solution 4
```js
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last ? first + sumAll([first + 1, last]) : first;
}

sumAll([1, 4]);
```

### REFERENCE LINKS
- [`Array.sort()`](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

