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

/*
Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value.
*/


function contains(nestedObject, value) {
    const allKeys = Object.keys(nestedObject);
    // base case, for loop through the object's keys
    for(let i = 0; i < allKeys.length; i++) {
        if (nestedObject[allKeys[i]] === value) return true; 
        // recursive invocation, will return the nested objects key
        if (typeof nestedObject[allKeys[i]] === 'object') {
            return contains(nestedObject[allKeys[i]], value);
        }
    }
    return false; // when we get through every single key
}

let bigObj = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: 'foo2'
            }
          }
        }
      }
    }
  };
console.log(contains(bigObj, 44)) // true
console.log(contains(bigObj, "foo")) // false