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

/*
You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. 
For instance, replicate(3, 5) should return [5,5,5]. 
If the times argument is negative, return an empty array.
*/

function replicate(times, number) {
    // base case will get an empty array to concat
    if (times <= 0) return [];
    // recursive invocation will concatenate to an array
    return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)); // [5, 5, 5]

/*
Write a function called search that finds a value in an array and 
returns the index where the value is at. 
If the value is not found, the function should return negative 1.
*/

// problem is unfinished
function search(numbers, valueToFind) {
    // base case - numbers only has one element left to check
    if (numbers.length === 1) {
        if(numbers[0] === valueToFind)  {
            return numbers[0];
        } else {
            return -1;
        } 
    }
    
    if (numbers[-1] === valueToFind) {
        return numbers[-1];
        
    } 
        numbers.pop(); // remove element from top of the stack/end of array
        search(numbers, valueToFind); // recursion

    // recursion invocation - we will check elements at the top of the stack for matching value

    
    // return -1;
}

// console.log(search([1,2,3,4,5], 5)); // 4
// console.log(search([1,2,3,4,5], 15)); // -1

/*
binarySearch - divide and conquer algorithm
*/

function binarySearch(numbers, valueToFind, start = 0, end = numbers.length - 1) {
//     var searchValue = 5 
    if (start > end) return -1; 

//     index = midpoint of current array
    let index = Math.floor(start + end / 2)
//     if searchValue == value at index
    if (valueToFind === numbers[index]){
//    return index
        return index;
    }
//     if searchValue > value at index
    if (valueToFind > numbers[index]) {
        // do binary search of upper half of array
        return binarySearch(numbers, valueToFind, index, end);
        
    }

//  if searchValue < value at index
    if (valueToFind < numbers[index]) {
        // do binary search of lower half of array
         return binarySearch(numbers, valueToFind, start, index + 1);
    }

    return -1 // element was not found
}

console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5], 15)); // -1

/*
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
*/

function stringifyNumbers(object) {
    
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// stringifyNumbers()
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/