// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.


function divide(dividend, divisor) {
    // Check for overflow and special cases
    if (divisor === 0) return 0;
    if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;
    
    // Convert both dividend and divisor to positive numbers
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    // Calculate the quotient using bit shifting
    let quotient = 0;
    for (let i = 31; i >= 0; i--) {
        if (dividend >= (divisor << i)) {
            dividend -= (divisor << i);
            quotient += (1 << i);
        }
    }
    
    // Apply the sign and check for overflow
    quotient *= sign;
    if (quotient > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (quotient < -(2 ** 31)) return -(2 ** 31);
    return quotient;
}
