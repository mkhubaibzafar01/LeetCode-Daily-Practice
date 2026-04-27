/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    let map = new Map();

    // شروع میں 0 مجموعہ ایک بار موجود ہوتا ہے (تاکہ اگر پہلا نمبر ہی k ہو تو وہ پکڑا جائے)
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        // اگر (currentSum - k) پہلے آ چکا ہے، تو اس کی تعداد رزلٹ میں جمع کریں
        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }

        // موجودہ مجموعے کو میپ میں اپ ڈیٹ کریں
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
};