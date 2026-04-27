/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        // اگر موجودہ حرف خالی جگہ نہیں ہے
        // اور (یا تو یہ پہلا حرف ہے یا اس سے پچھلا حرف خالی جگہ تھی)
        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
            count++;
        }
    }
    
    return count;
};