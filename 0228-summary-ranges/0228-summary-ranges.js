/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        // جب تک اگلے نمبر میں 1 کا فرق ہے، آگے بڑھتے رہیں
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        // اگر سٹارٹ اور موجودہ نمبر برابر نہیں، تو رینج بنائیں
        if (start !== nums[i]) {
            result.push(start + "->" + nums[i]);
        } else {
            // ورنہ صرف اکیلا نمبر ڈالیں
            result.push(start.toString());
        }
        
        i++;
    }

    return result;
};