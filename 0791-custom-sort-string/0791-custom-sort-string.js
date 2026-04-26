/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let counts = {};
    
    // اسٹرنگ s کے حروف کی گنتی کریں
    for (let char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    
    let result = "";
    
    // آرڈر کے مطابق حروف شامل کریں
    for (let char of order) {
        if (counts[char]) {
            result += char.repeat(counts[char]);
            delete counts[char]; // اسے ڈیلیٹ کر دیں تاکہ یاد رہے کہ یہ ہو گیا
        }
    }
    
    // باقی بچ جانے والے حروف کو آخر میں جوڑ دیں
    for (let char in counts) {
        result += char.repeat(counts[char]);
    }
    
    return result;
};