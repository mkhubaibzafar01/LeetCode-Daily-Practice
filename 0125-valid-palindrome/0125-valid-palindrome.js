/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 1. تمام غیر ضروری نشانات اور سپیس ختم کریں اور چھوٹے حروف (lowercase) میں بدلیں
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. اسٹرنگ کو الٹا کریں
    let reversedStr = cleanStr.split('').reverse().join('');
    
    // 3. اگر سیدھی اور الٹی اسٹرنگ ایک جیسی ہے، تو یہ palindrome ہے
    return cleanStr === reversedStr;
};