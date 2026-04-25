/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // اگر حرف پہلے سے سیٹ میں ہے، تو بائیں طرف سے کھڑکی (window) چھوٹی کریں
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        
        // نیا حرف سیٹ میں ڈالیں
        set.add(s[right]);
        
        // موجودہ کھڑکی کی لمبائی چیک کریں
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};