// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

function numIslands(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }
    
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    
    const dfs = (i, j) => {
      if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
        return;
      }
      grid[i][j] = '0';
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    };
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1') {
          count++;
          dfs(i, j);
        }
      }
    }
    
    return count;
  }
  