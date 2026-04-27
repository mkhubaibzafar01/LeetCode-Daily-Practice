/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // 1. نمبروں کو ترتیب دیں
    nums.sort((a, b) => a - b);
    
    let sum = 0;
    // 2. ہر جوڑے کا پہلا (چھوٹا) نمبر اٹھائیں
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    return sum;
};