/*
Write a function called productOfArray which takes in an array of numbers 
and returns the product of them all.
*/

function productOfArray(numbers) {
    // base case
    if (numbers.length === 1) return numbers[0]; // one element left in the array
    // we need to remove an element of the array everytime we make a recursive call
    numbers[0] = numbers[0] * numbers.pop(); // first element is accumulator
    return productOfArray(numbers); // the numbers array has one less element now 
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60