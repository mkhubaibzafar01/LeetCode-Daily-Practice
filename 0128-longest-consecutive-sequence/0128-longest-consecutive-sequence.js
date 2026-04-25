/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    // تمام نمبروں کو ایک Set میں ڈال دیں تاکہ سرچ کرنا آسان ہو
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // چیک کریں کہ کیا یہ کسی سلسلے کا پہلا نمبر ہے؟
        // (اگر اس سے ایک چھوٹا نمبر سیٹ میں نہیں ہے، تو یہی پہلا ہے)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // جب تک اگلے نمبر مل رہے ہیں، گنتی بڑھاتے رہیں
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // سب سے بڑی گنتی یاد رکھیں
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};