/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;

    return function() {
        // پہلے موجودہ ویلیو واپس کریں، پھر اس میں 1 کا اضافہ کریں
        return count++;
    };
};

/** * استعمال کا طریقہ:
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */