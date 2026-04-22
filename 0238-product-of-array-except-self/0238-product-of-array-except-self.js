/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(1);

    // 1. بائیں طرف کے تمام نمبروں کا حاصل ضرب نکالیں
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        res[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // 2. اب دائیں طرف سے ضرب دیتے ہوئے اسے فائنل کریں
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return res;
};