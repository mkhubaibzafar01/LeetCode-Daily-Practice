/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 1. ایک نیا Set بنائیں جس میں ہم لسٹ کے نمبرز ڈالیں گے
    let mySet = new Set(nums);

    // 2. اگر Set کا سائز اور لسٹ کی لمبائی برابر نہیں ہے، 
    // تو اس کا مطلب ہے کہ لسٹ میں کچھ نمبر دو بار تھے جو Set نے نکال دیے
    return mySet.size !== nums.length;
};