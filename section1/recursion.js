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