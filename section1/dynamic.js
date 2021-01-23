// recursive fibonacci example
function fib(n) {
    if (n <= 0) { return 0; }
    if (n <= 2) { return 1; }

    return fib(n - 1) + fib(n - 2); 
}

/*
Stack Frames

fib(5), n = 5, line number 6 waiting on fib(n-1)
fib(4), n = 4, line number 6 waiting on fib(n-1)
fib(3), n = 3, line number 6 waiting on fib(n-1)
fib(2), n = 2, line number 3, RETURN 1

fib(5), n = 5, line number 6 waiting on fib(n-1)
fib(4), n = 4, line number 6 waiting on fib(n-1)
fib(3), n = 3, line number 6, RETURNING 1 + 1

fib(5), n = 5, line number 6 waiting on fib(n-1)
fib(4), n = 4, line number 6, RETURNING 2 + 1
*/

function fibMemo(n, savedFib = {}) {
    // base cases for fib(0), fib(1), fib(2)
    if (n <= 0) { return 0; }
    if (n <= 2) { return 1; }

    // Memoization -> Save a hashmap containing values of fib(n) 
    if (savedFib[n - 1] === undefined) {
        savedFib[n - 1] = fib(n - 1, savedFib); // saves key value pairs
    }

    if (savedFib[n - 2] === undefined) {
        savedFib[n - 2] = fib(n - 2, savedFib);
    }

    return savedFib[n - 1] * savedFib[n - 2];
}

function fibTabulation(n) {
    // subproblem - think of how many elements will be in the array before the calculations star
    const fibResults = new Array(n + 1).fill(0);
    // base case, the second element will be 1
    fibResults[1] = 1;
    // fibonacci calculations, storing values in the array, with n = 2 being 1
    for (let i = 0; i <= n; i++) {
        fibResults[i] = fibResults[i - 1] + fibResults[i - 2]; // always the sum of previous 2 elements in fibonacci sequence
    }
    return fibResults[n]; // the last element has the largest sum to be returned
}