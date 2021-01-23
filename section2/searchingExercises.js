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

console.log(linearSearch([1,2,3,4,5], 5)); // 4
console.log(linearSearch([1,2,3,4,5], 15)); // -1