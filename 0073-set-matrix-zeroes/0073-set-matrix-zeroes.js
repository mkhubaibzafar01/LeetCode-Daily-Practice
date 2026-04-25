/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let rowZero = false;

    // 1. پہلے سیلز کو چیک کریں اور پہلی رو/کالم کو بطور مارکر استعمال کریں
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0; // کالم کو مارک کریں
                if (r > 0) {
                    matrix[r][0] = 0; // رو کو مارک کریں
                } else {
                    rowZero = true;
                }
            }
        }
    }

    // 2. مارکرز کی بنیاد پر میٹرکس کو 0 کریں (پہلی رو اور کالم کے علاوہ)
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // 3. اگر پہلا کالم 0 ہونا تھا
    if (matrix[0][0] === 0) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }

    // 4. اگر پہلی رو 0 ہونی تھی
    if (rowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }
};