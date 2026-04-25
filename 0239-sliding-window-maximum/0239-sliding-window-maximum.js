/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let deque = []; // یہ انڈیکس اسٹور کرے گا

    for (let i = 0; i < nums.length; i++) {
        // 1. کھڑکی سے باہر والے انڈیکس نکال دیں
        if (deque.length > 0 && deque[0] === i - k) {
            deque.shift();
        }

        // 2. نئے نمبر سے چھوٹے تمام نمبرز نکال دیں (کیونکہ وہ اب کبھی میکس نہیں بن سکتے)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 3. موجودہ انڈیکس ڈالیں
        deque.push(i);

        // 4. جب کھڑکی کا سائز پورا ہو جائے، تو رزلٹ میں سب سے بڑا نمبر ڈالیں
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};