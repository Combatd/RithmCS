/*
linearSearch
This function should accept an array and value and return the index at which the value exists 
or -1 if the value can not be found. Do not use indexOf to solve this! 
This function should use iteration not recursion.
*/

function linearSearch(arr, searchValue) {
    // linear search should use a classic for loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) { return i }
    }
    return -1; // if the element does not exist in the array
}

// console.log(linearSearch([1,2,3,4,5], 5)); // 4
// console.log(linearSearch([1,2,3,4,5], 15)); // -1

/*
linearSearchRecursive

This function should accept an array and value and return the index 
at which the value exists or -1 
if the value can not be found. Do not use indexOf to solve this! 
This function should use recursion.
*/

function linearSearchRecursive(theArr, searchValue) {
    // the index
    // let index = arr.length - 1;
    // console.log(index)
    // base case
    // when array length is 1
    if (theArr.length === 1) {
        if (theArr[0] === searchValue) {
            return 0
        } else {
            return -1;
        }
    }
    // check the element at the top of the stack (end of array)
    if (theArr[theArr.length - 1] === searchValue) { 
        return theArr.length - 1
    } else {
        // remove the element at top of stack if it doesn't exist
        theArr.pop()
        // invoke the function with the top of the stack element removed (recursion)
        return linearSearchRecursive(theArr, searchValue);   
    }
}


// console.log(linearSearchRecursive([1,2,3,4,5], 5)); // 4
// console.log(linearSearchRecursive([1,2,3,4,5], 15)); // -1

function binarySearch(numbers, valueToFind, start = 0, end = numbers.length - 1) {
    let midPoint;

    while (start <= end) {
        midPoint = Math.floor( (start + end) / 2);
        
        if (valueToFind === numbers[midPoint]) {
            console.log('value was found');
            return midPoint;
        } else if (valueToFind > numbers[midPoint]) {
            start = midPoint + 1; // skip left side
        } else {
            end = midPoint - 1; // skip right side
        }
    }
    // valueToFind not found, so return -1
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5], 15)); // -1

function binarySearchRecursive(numbers, valueToFind, start = 0, end = numbers.length - 1) {
        // var searchValue = 5 
        if (start > end) return -1; 
        // index = midpoint of current array
        let index = Math.floor(start + end / 2)
        // if searchValue == value at index
        if (valueToFind === numbers[index]){
        // return index
            return index;
        }
        // if searchValue > value at index
        if (valueToFind > numbers[index]) {
            // do binary search of upper half of array
            return binarySearch(numbers, valueToFind, index, end);
        }
        // if searchValue < value at index
        if (valueToFind < numbers[index]) {
            // do binary search of lower half of array
             return binarySearch(numbers, valueToFind, start, index + 1);
        }
        return -1 // element was not found
}
    
// console.log(binarySearchRecursive([1,2,3,4,5], 5)); // 4
// console.log(binarySearchRecursive([1,2,3,4,5], 15)); // -1