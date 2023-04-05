// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
    // If x is negative or its last digit is 0 (except when x is 0 itself),
    // then it cannot be a palindrome.
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false;
    }
    
    let reversed = 0;
    while (x > reversed) {
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
    }
    
    // If the length of x is odd, we can ignore the middle digit.
    // For example, if x is 12321, then x will become 12 and reversed will become 123.
    // In this case, we need to divide reversed by 10 to remove the middle digit.
    return x === reversed || x === Math.floor(reversed / 10);
  }
  