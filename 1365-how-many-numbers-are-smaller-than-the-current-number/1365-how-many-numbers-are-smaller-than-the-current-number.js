/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // 1. لسٹ کی ایک کاپی بنائیں اور اسے ترتیب دیں (Sort)
    let sorted = [...nums].sort((a, b) => a - b);
    let map = new Map();

    // 2. ہر نمبر کا پہلا انڈیکس محفوظ کریں (وہی بتائے گا کہ اس سے چھوٹے کتنے ہیں)
    for (let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], i);
        }
    }

    // 3. اصلی لسٹ کے حساب سے رزلٹ نکالیں
    return nums.map(num => map.get(num));
};