// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.


function longestWordChain(words) {
    // Sort the words by length, so we can start with the longest ones
    words.sort((a, b) => b.length - a.length);
  
    let maxChainLength = 1;
    const chainLengths = {};
  
    for (const word of words) {
      let maxLength = 1;
      for (let i = 0; i < word.length; i++) {
        // Try removing each character in the word and see if we get a shorter word in the list
        const shortenedWord = word.slice(0, i) + word.slice(i + 1);
        const chainLength = chainLengths[shortenedWord] || 1;
        maxLength = Math.max(maxLength, chainLength + 1);
      }
      chainLengths[word] = maxLength;
      maxChainLength = Math.max(maxChainLength, maxLength);
    }
  
    return maxChainLength;
  }
  