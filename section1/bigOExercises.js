// 1. O(n) Linear Time
// O(1) Constant Space

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 2. O(n) Linear Time
// O(1) Constant Space

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// 3. O(n) Time
// O(1) Constant Space

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// 4. O(n) Linear Time
// O(n) Linear Space - conditional inside the ofr loop

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// 5. O(n^2) Quadratic Time - Runs a set of iterations up to n at each iteration of n
// O(n) Space

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}