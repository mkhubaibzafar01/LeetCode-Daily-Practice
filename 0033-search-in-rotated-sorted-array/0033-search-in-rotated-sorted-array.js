/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;

        // چیک کریں کہ کیا بائیاں حصہ ترتیب میں ہے؟
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1; // ٹارگٹ یہاں موجود ہے
            } else {
                low = mid + 1; // دوسری طرف جائیں
            }
        } 
        // ورنہ دایاں حصہ ترتیب میں ہوگا
        else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1; // ٹارگٹ یہاں موجود ہے
            } else {
                high = mid - 1; // دوسری طرف جائیں
            }
        }
    }

    return -1;
};