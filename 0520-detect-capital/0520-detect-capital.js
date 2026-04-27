/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // 1. تمام حروف بڑے ہوں
    if (word === word.toUpperCase()) return true;
    
    // 2. تمام حروف چھوٹے ہوں
    if (word === word.toLowerCase()) return true;
    
    // 3. صرف پہلا بڑا اور باقی چھوٹے ہوں
    // ہم پہلے حرف کے بعد والے حصے (slice(1)) کو چیک کریں گے
    let restOfWord = word.slice(1);
    if (word[0] === word[0].toUpperCase() && restOfWord === restOfWord.toLowerCase()) {
        return true;
    }
    
    return false;
};