/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    // 1. ہر نمبر کی گنتی کریں (Frequency Map)
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // 2. میپ کو ایک ایرے (Array) میں بدل کر گنتی کے حساب سے ترتیب دیں (Sort)
    let sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    
    // 3. پہلے 'k' نمبر نکال لیں
    return sortedArray.slice(0, k).map(item => item[0]);
};