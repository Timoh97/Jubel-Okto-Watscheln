// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

function maximalSquare(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSquare = 0;
    const dp = Array(m)
      .fill()
      .map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = matrix[i][j] === '1' ? 1 : 0;
        } else if (matrix[i][j] === '1') {
          dp[i][j] =
            1 +
            Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
        maxSquare = Math.max(maxSquare, dp[i][j]);
      }
    }
    return maxSquare * maxSquare;
  }
  