/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    
    for (let i = 0; i < nums.length; i++) {
        // پچھلی ویلیو اور موجودہ ایلیمنٹ کو ملا کر نئی ویلیو بنائیں
        val = fn(val, nums[i]);
    }
    
    return val;
};