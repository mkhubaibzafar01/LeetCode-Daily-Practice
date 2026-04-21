/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 1. شروع اور آخر کی خالی جگہیں ختم کریں
    let trimmedString = s.trim();
    
    // 2. جملے کو الفاظ میں توڑیں
    let words = trimmedString.split(' ');
    
    // 3. آخری لفظ نکالیں
    let lastWord = words[words.length - 1];
    
    // 4. اس کی لمبائی واپس کریں
    return lastWord.length;
};