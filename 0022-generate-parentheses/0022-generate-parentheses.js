/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(currentStr, open, close) {
        // اگر ہماری اسٹرنگ کی لمبائی n * 2 ہو گئی ہے، تو یہ مکمل ہے
        if (currentStr.length === n * 2) {
            result.push(currentStr);
            return;
        }

        // اگر ابھی مزید اوپن بریکٹس لگ سکتے ہیں
        if (open < n) {
            backtrack(currentStr + "(", open + 1, close);
        }

        // اگر کلوز بریکٹس اوپن سے کم ہیں (یعنی بند کرنے کی جگہ ہے)
        if (close < open) {
            backtrack(currentStr + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};