/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. پہلے تمام وقفوں کو ان کے پہلے نمبر کے حساب سے ترتیب دیں (Sort)
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastAdded = result[result.length - 1];
        let current = intervals[i];

        // 2. چیک کریں کہ کیا موجودہ وقفہ پچھلے والے کے ساتھ جڑ رہا ہے؟
        if (current[0] <= lastAdded[1]) {
            // اگر جڑ رہا ہے تو پچھلے والے کا اختتام (End) بڑھا دیں
            lastAdded[1] = Math.max(lastAdded[1], current[1]);
        } else {
            // اگر نہیں جڑ رہا تو اسے الگ سے رزلٹ میں ڈال دیں
            result.push(current);
        }
    }

    return result;
};