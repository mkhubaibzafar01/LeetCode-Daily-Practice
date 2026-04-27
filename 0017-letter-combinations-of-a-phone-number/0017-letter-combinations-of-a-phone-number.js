/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, currentString) {
        // اگر ہم نے تمام ہندسے پورے کر لیے ہیں
        if (index === digits.length) {
            result.push(currentString);
            return;
        }

        // موجودہ ہندسے کے حروف حاصل کریں
        const letters = phoneMap[digits[index]];
        for (const char of letters) {
            // اگلے ہندسے پر جائیں
            backtrack(index + 1, currentString + char);
        }
    }

    backtrack(0, "");
    return result;
};