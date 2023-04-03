// Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      // Check for odd length palindromes centered at i
      let left = i, right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      const oddLength = s.slice(left + 1, right);
      if (oddLength.length > result.length) {
        result = oddLength;
      }
  
      // Check for even length palindromes centered at i and i+1
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      const evenLength = s.slice(left + 1, right);
      if (evenLength.length > result.length) {
        result = evenLength;
      }
    }
    return result;
  }
  