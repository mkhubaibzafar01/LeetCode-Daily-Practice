/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;

    // 1. تمام غیر صفر نمبروں کو لسٹ کے شروع میں لائیں
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // نمبرز کو آپس میں بدلیں (Swap)
            let temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt] = nums[i];
            nums[i] = temp;
            
            lastNonZeroFoundAt++;
        }
    }
};