/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    // 1. Transpose کریں (قطاروں کو کالم بنا دیں)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // آپس میں تبدیل (Swap) کریں
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // 2. ہر قطار (Row) کو الٹا (Reverse) کر دیں
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};