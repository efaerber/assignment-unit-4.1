console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(Elliot) {
  return; 'Hello, Elliot';
}
// Remember to call the function to test
console.log('Changed Hello World to Hello Elliot')

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber) { 
  return sum = firstNumber += secondNumber;
  const secondNumber = 4;
  const sum = firstNumber += secondNumber;
  // return firstNumber + secondNumber;
}
console.log('Created function to addd two numbers')

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdnumber) {
  return firstNumber * secondNumber * thirdnumber;
}

console.log('Attempted multiplication function')

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return; true
  }
  if (number < 0) {
    return; false
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

console.log('isPositive is returning results as Undefined for all sums')


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (arr.lenth > 0) {

    return arr[arr.length - 1 ];
  }   return undefined;
}

console.log('Added an array to the getLast function')

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i = 0; i < array.legnth; i++) {

  if (array[i] === value) {
    return true;
  }
}  return false;
}

console.log('Created array for the find function')

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
