/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 1. تمام حروف کو چھوٹا کریں اور صرف alphanumeric (a-z, 0-9) حروف رکھیں
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. اسٹرنگ کو الٹا کریں
    let reversedStr = cleanStr.split('').reverse().join('');
    
    // 3. چیک کریں کہ کیا اصل اور الٹی اسٹرنگ ایک جیسی ہیں
    return cleanStr === reversedStr;
};