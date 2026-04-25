/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    let map = {};

    for (let num of nums) {
        if (map[num]) {
            // اگر یہ نمبر پہلے آ چکا ہے، تو جتنی بار آیا ہے اتنے جوڑے بنیں گے
            count += map[num];
            map[num]++;
        } else {
            // پہلی بار آنے پر اسے 1 سیٹ کر دیں
            map[num] = 1;
        }
    }

    return count;
};