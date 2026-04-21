/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // ایک پوائنٹر (k) جو انڈیکس کو ٹریک کرے گا
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // اگر موجودہ نمبر 'val' کے برابر نہیں ہے
        if (nums[i] !== val) {
            // اسے ارے کے شروع میں موجودہ خالی جگہ (k) پر رکھ دیں
            nums[k] = nums[i];
            k++;
        }
    }
    
    // نئے ارے کی لمبائی واپس کریں
    return k;
};