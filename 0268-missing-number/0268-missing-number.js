/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    
    // 1. فارمولے کے ذریعے مجموعہ نکالیں جو ہونا چاہیے تھا
    const expectedSum = (n * (n + 1)) / 2;
    
    // 2. لسٹ میں موجود نمبروں کا اصل مجموعہ نکالیں
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // 3. فرق ہی غائب نمبر ہے
    return expectedSum - actualSum;
};