/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // ہمارا آخری ہدف (Goal) لسٹ کا آخری انڈیکس ہے
    let goal = nums.length - 1;

    // ہم لسٹ کے آخر سے پیچھے کی طرف چلیں گے
    for (let i = nums.length - 2; i >= 0; i--) {
        // اگر اس جگہ سے ہم اپنے ہدف (Goal) تک پہنچ سکتے ہیں
        if (i + nums[i] >= goal) {
            // تو اب ہمارا نیا ہدف یہ جگہ بن جائے گی
            goal = i;
        }
    }

    // اگر آخر میں ہمارا ہدف 0 تک پہنچ گیا، تو مطلب ہم شروع سے آخر تک جا سکتے ہیں
    return goal === 0;
};