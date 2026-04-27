/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    return words.filter(word => {
        let lowerWord = word.toLowerCase();
        let targetRow;

        // پہلے حرف سے لائن کا تعین کریں
        if (row1.has(lowerWord[0])) targetRow = row1;
        else if (row2.has(lowerWord[0])) targetRow = row2;
        else targetRow = row3;

        // چیک کریں کہ کیا باقی تمام حروف بھی اسی لائن میں ہیں
        for (let char of lowerWord) {
            if (!targetRow.has(char)) return false;
        }
        return true;
    });
};