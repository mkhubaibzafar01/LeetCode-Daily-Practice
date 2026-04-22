/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // ہم لسٹ کے آخر سے شروع کریں گے
    for (let i = digits.length - 1; i >= 0; i--) {
        // اگر ہندسہ 9 سے چھوٹا ہے تو بس 1 جمع کریں اور جواب دے دیں
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // اگر 9 ہے، تو اسے 0 کر دیں اور لوپ جاری رکھیں تاکہ پچھلے میں جمع ہو سکے
        digits[i] = 0;
    }

    // اگر پوری لسٹ 9 تھی (جیسے 999) تو وہ سب 0 ہو چکے ہوں گے
    // اب ہمیں شروع میں ایک 1 لگانا ہوگا (جیسے 1000)
    digits.unshift(1);
    return digits;
};