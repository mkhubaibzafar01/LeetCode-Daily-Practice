/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // قیمتی پتھروں کو Set میں ڈال دیں تاکہ سرچ تیز ہو
    let jewelSet = new Set(jewels);
    let count = 0;

    for (let stone of stones) {
        // اگر ہمارا پتھر قیمتی سیٹ میں موجود ہے تو گنتی بڑھا دیں
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
};