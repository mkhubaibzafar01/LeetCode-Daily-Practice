/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 1. اگر نمبر منفی (negative) ہے تو وہ کبھی Palindrome نہیں ہو سکتا
    if (x < 0) return false;

    // 2. نمبر کو اسٹرنگ میں بدلیں، اسے الٹا کریں، اور پھر دوبارہ جوڑ دیں
    let reversed = x.toString().split('').reverse().join('');

    // 3. چیک کریں کہ کیا اصل نمبر اور الٹا کیا ہوا نمبر برابر ہیں
    return x.toString() === reversed;
};