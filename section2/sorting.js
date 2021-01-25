const unsorted = [4,5,1,21,2,9,10,15];
const sorted = [1,2,4,5,9,10,15,21];
const unsortedNegative = [9,-2,0,35,4,-10,22,12];
const sortedNegative = [-10,-2,0,4,9,12,22,35];

/*
[
    1,  2,  4,  5,
    9, 10, 15, 21
]
[
    1,  2,  4,  5,
    9, 10, 15, 21
]
[
    -10, -2,  0,  4,
      9, 12, 22, 35
]
[
    -10, -2,  0,  4,
      9, 12, 22, 35
]
*/

/*
#bubbleSort
Your function should accept an array and return an array of sorted values.
*/

function bubbleSort(arr) {
    const copyArr = arr.slice(0); // functional programming retains original state
    for (let i = 0; i < copyArr.length; i++) {
        // For each element in the array, compare it with the next element (the element to the right).
        
        for (let j = 0; j < copyArr.length; j++) {  
            // If the element is greater than the value on the right, swap the two values.
            if (copyArr[j] > copyArr[j + 1]) {
                let currentElement = copyArr[j];
                copyArr[j] = copyArr[j + 1];
                copyArr[j + 1] = currentElement;
                // continue; // a swap has happened, next iteration of inner loop
            }
        }
        // Continue to swap until you have reached the end of the array (outer loop). At this point the rightmost element will be in its correct place.
    }
    // Start at the beginning of the array and repeat this process. Since the rightmost element from the last iteration is now sorted, this process will terminate earlier and earlier each time you repeat.
    return copyArr;
}

// console.log(bubbleSort(unsorted));
// console.log(bubbleSort(sorted));
// console.log(bubbleSort(unsortedNegative));
// console.log(bubbleSort(sortedNegative));

/*
#insertionnSort

Implement insertion sort. Your function should accept an array and return an array of sorted values.
*/

function insertionSort(arr) {
    const copyArr = [...arr]; // functional programming retains original state
    let currentIndex = 1; // Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)

    while (currentIndex < copyArr.length) {
        for (let i = 0; i < currentIndex; i++) {
            // Now compare the second element with the one before it and swap if necessary.
            if (copyArr[currentIndex] < copyArr[i]) {
                let currentElement = copyArr[i];
                copyArr[i] = copyArr[currentIndex];
                copyArr[currentIndex] = currentElement;
            }
        }
        // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
        currentIndex += 1;
    }
    // Repeat until the array is sorted.
    return copyArr;
}

// console.log(insertionSort(unsorted));
// console.log(insertionSort(sorted));
// console.log(insertionSort(unsortedNegative));
// console.log(insertionSort(sortedNegative));

/*
#selectionSort
Implement selection sort. 
Your function should accept an array and return an array of sorted values.
*/

function selectionSort(arr) {
    const copyArr = arr.slice(0); // functional programming maintains original state

    for (let i = 0; i < copyArr.length; i++) {
        let minimum = i;
        // Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
        // Compare this item to the next item in the array until you find a smaller number.
        for (let j = i + 1; j < copyArr.length; j++) {
            // If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
            if (copyArr[minimum] > copyArr[j]) {
                minimum = j;
            }
        }
        // If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
        if (minimum != i) {
            let previousMinimumValue = copyArr[i]; // temporary holding variable
            copyArr[i] = copyArr[minimum]
            copyArr[minimum] = previousMinimumValue;
        }
        // reset the minimum (happens at the beginning of next loop)
        
        // Repeat this with the next element until the array is sorted.
    }
    return copyArr;
}

// console.log(selectionSort(unsorted));
// console.log(selectionSort(sorted));
// console.log(selectionSort(unsortedNegative));
// console.log(selectionSort(sortedNegative));