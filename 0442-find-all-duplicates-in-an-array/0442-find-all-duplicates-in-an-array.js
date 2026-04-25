/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // نمبر کی اصل ویلیو نکالیں (تاکہ اگر وہ منفی ہو چکا ہو تو مسئلہ نہ ہو)
        let val = Math.abs(nums[i]);
        let index = val - 1;

        // اگر اس انڈیکس پر موجود نمبر پہلے سے منفی ہے، مطلب یہ نمبر دوبارہ آیا ہے
        if (nums[index] < 0) {
            result.push(val);
        } else {
            // ورنہ اس انڈیکس والے نمبر کو منفی (Mark) کر دیں
            nums[index] = -nums[index];
        }
    }

    return result;
};