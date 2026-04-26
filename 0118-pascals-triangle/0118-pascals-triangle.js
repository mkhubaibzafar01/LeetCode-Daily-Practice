/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        // ہر لائن خالی Array سے شروع کریں
        let row = new Array(i + 1);
        
        // لائن کے شروع اور آخر میں 1 لگائیں
        row[0] = 1;
        row[i] = 1;

        // بیچ والے نمبرز کے لیے لوپ (اگر i > 1 ہو)
        for (let j = 1; j < i; j++) {
            // اوپر والی لائن کے دو نمبرز کا مجموعہ
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
};