
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // درمیان والا انڈیکس نکالیں
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // مل گیا!
        } else if (nums[mid] < target) {
            left = mid + 1; // دائیں طرف تلاش کریں
        } else {
            right = mid - 1; // بائیں طرف تلاش کریں
        }
    }

    // اگر نہیں ملا، تو 'left' وہ جگہ ہوگی جہاں اسے ہونا چاہیے
    return left;
};