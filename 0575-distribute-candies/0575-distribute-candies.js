/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    // 1. کل مختلف اقسام نکالیں
    const uniqueTypes = new Set(candyType).size;
    
    // 2. کھانے کی گنجائش نکالیں
    const maxAllowed = candyType.length / 2;
    
    // 3. جو بھی چھوٹا ہے وہ جواب ہے
    return Math.min(uniqueTypes, maxAllowed);
};