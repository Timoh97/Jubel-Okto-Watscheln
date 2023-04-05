function isValidSudoku(board) {
    // Initialize a set for each row, column, and sub-box
    let rowSet = new Array(9).fill().map(() => new Set());
    let colSet = new Array(9).fill().map(() => new Set());
    let boxSet = new Array(9).fill().map(() => new Set());
    
    // Iterate through each cell of the board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = board[i][j];
            
            // Check if the cell is filled
            if (value !== '.') {
                // Check if the value is already in the corresponding sets
                if (rowSet[i].has(value) || colSet[j].has(value) || boxSet[3 * Math.floor(i / 3) + Math.floor(j / 3)].has(value)) {
                    return false;
                }
                // Add the value to the corresponding sets
                rowSet[i].add(value);
                colSet[j].add(value);
                boxSet[3 * Math.floor(i / 3) + Math.floor(j / 3)].add(value);
            }
        }
    }
    
    // If all cells pass the validation, return true
    return true;
}
