/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};

    for (let s of strs) {
        // 1. لفظ کو ترتیب دیں (مثلاً "eat" بن جائے گا "aet")
        let sorted = s.split('').sort().join('');
        
        // 2. اگر یہ ترتیب شدہ لفظ پہلے سے موجود نہیں تو نیا گروپ بنائیں
        if (!res[sorted]) {
            res[sorted] = [];
        }
        
        // 3. اس گروپ میں اصل لفظ ڈال دیں
        res[sorted].push(s);
    }

    // تمام گروپس کی لسٹ واپس کریں
    return Object.values(res);
};