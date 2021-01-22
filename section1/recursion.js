/*
Write a function called power which takes in a base and an exponent. 
If the exponent is 0, return 1. 
Otherwise, return the result of the base multiplied by the power function to the exponent - 1.

2^4 = 2 * 2^3;
2^3 = 2 * 2^2;
2^2 = 2 * 2^1;
2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!
*/

function power(base, exponent) {
    if (exponent === 0) return 1; // base case, we always know it will return 1 when exponent is 0
    return base * power(base, exponent - 1);
}

/*
 write a function that returns the factorial of a number. 
 As a quick refresher, a factorial of a number is the result of that number multiplied by 
 the number before it, and the number before that number, and so on, until you reach 1. 
 The factorial of 1 is just 1. For example:

 factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

function factorial(num) {
    // base case
    if (num === 1) return 1; // will return 1 on the last invocation
    // recursion will multiply the num by the num - 1 invoking #factorial
    return num * factorial(num - 1);
}