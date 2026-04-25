/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix.length) return 0;
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    // میمورائزیشن کے لیے ایک ٹیبل (Cache)
    let memo = Array.from({ length: rows }, () => new Array(cols).fill(0));
    
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let maxPath = 0;

    const dfs = (r, c) => {
        // اگر اس خانے کا جواب پہلے سے معلوم ہے تو وہی واپس کر دیں
        if (memo[r][c] !== 0) return memo[r][c];

        let res = 1;
        for (let [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;
            // چیک کریں کہ کیا ہم میٹرکس کے اندر ہیں اور اگلا نمبر بڑا ہے؟
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc] > matrix[r][c]) {
                res = Math.max(res, 1 + dfs(nr, nc));
            }
        }
        
        // جواب کو محفوظ کریں تاکہ دوبارہ حساب نہ کرنا پڑے
        memo[r][c] = res;
        return res;
    };

    // ہر خانے سے ڈی ایف ایس (DFS) شروع کریں
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxPath = Math.max(maxPath, dfs(i, j));
        }
    }

    return maxPath;
};