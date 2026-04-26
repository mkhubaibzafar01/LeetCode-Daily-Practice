/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // نمبر کو بائنری (base 2) اسٹرنگ میں تبدیل کریں
    let binary = n.toString(2);
    
    let count = 0;
    // پوری اسٹرنگ پر لوپ چلائیں
    for (let bit of binary) {
        if (bit === '1') {
            count++;
        }
    }
    
    return count;
};