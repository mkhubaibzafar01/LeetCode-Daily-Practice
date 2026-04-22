/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length; // اگر k لسٹ کی لمبائی سے بڑا ہو

    // 1. پوری لسٹ کو الٹا کریں
    reverse(nums, 0, nums.length - 1);
    // 2. شروع والے k نمبروں کو الٹا کریں
    reverse(nums, 0, k - 1);
    // 3. باقی رہ جانے والے نمبروں کو الٹا کریں
    reverse(nums, k, nums.length - 1);
};

// مددگار فنکشن (Helper function) لسٹ کو الٹا کرنے کے لیے
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}