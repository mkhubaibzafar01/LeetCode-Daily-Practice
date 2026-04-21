/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    // پہلا پوائنٹر (i) جو منفرد نمبروں کی جگہ یاد رکھے گا
    let i = 0;
    
    // دوسرا پوائنٹر (j) جو پوری لسٹ کو چیک کرے گا
    for (let j = 1; j < nums.length; j++) {
        // اگر ہمیں کوئی نیا نمبر ملے جو پچھلے سے مختلف ہو
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    // منفرد نمبروں کی کل تعداد واپس کریں
    return i + 1;
};