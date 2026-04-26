/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, char) => {
        for (let i = 0; i < 9; i++) {
            // قطار، کالم اور 3x3 باکس چیک کریں
            if (board[row][i] === char) return false;
            if (board[i][col] === char) return false;
            let startRow = 3 * Math.floor(row / 3);
            let startCol = 3 * Math.floor(col / 3);
            if (board[startRow + Math.floor(i / 3)][startCol + i % 3] === char) return false;
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let char = 1; char <= 9; char++) {
                        let s = char.toString();
                        if (isValid(r, c, s)) {
                            board[r][c] = s;
                            if (solve()) return true; // اگر حل مل گیا
                            board[r][c] = '.'; // Backtrack
                        }
                    }
                    return false; // اگر کوئی بھی نمبر فٹ نہ ہو
                }
            }
        }
        return true; // اگر کوئی خالی خانہ نہ بچے
    };

    solve();
};