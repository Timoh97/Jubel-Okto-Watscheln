// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

function decodeString(s) {
    const stack = [];
    let currStr = '';
    let currNum = 0;
    
    for (let i = 0; i < s.length; i++) {
      const currChar = s.charAt(i);
      
      if (/\d/.test(currChar)) { // check if the character is a digit
        currNum = currNum * 10 + parseInt(currChar); // update the current number
      } else if (currChar === '[') {
        stack.push(currStr); // push the current string to the stack
        stack.push(currNum); // push the current number to the stack
        currStr = ''; // reset the current string
        currNum = 0; // reset the current number
      } else if (currChar === ']') {
        const num = stack.pop(); // pop the number from the stack
        const prevStr = stack.pop(); // pop the previous string from the stack
        currStr = prevStr + currStr.repeat(num); // concatenate the previous string with the current string repeated num times
      } else {
        currStr += currChar; // append the current character to the current string
      }
    }
    
    return currStr; // the final result is stored in the current string
  }
  