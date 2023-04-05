// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type

function isValid(s) {
    const stack = [];
    for (const c of s) {
      if (c === '(' || c === '{' || c === '[') {
        stack.push(c);
      } else if (c === ')') {
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
          return false;
        }
        stack.pop();
      } else if (c === '}') {
        if (stack.length === 0 || stack[stack.length - 1] !== '{') {
          return false;
        }
        stack.pop();
      } else if (c === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== '[') {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  