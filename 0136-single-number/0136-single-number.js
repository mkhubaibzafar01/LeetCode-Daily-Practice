/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    
    // ہم پوری لسٹ پر ایک لوپ چلائیں گے
    for (let num of nums) {
        // XOR اپریٹر کا جادو: اگر دو نمبر ایک جیسے ہوں تو وہ ایک دوسرے کو ختم (0) کر دیتے ہیں
        result = result ^ num;
    }
    
    // آخر میں صرف وہی نمبر بچے گا جو اکیلا تھا
    return result;
};