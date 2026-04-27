/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // 0 کو شروع میں بھیجیں
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // 1 اپنی جگہ پر ٹھیک ہے
            mid++;
        } else {
            // 2 کو آخر میں بھیجیں
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};