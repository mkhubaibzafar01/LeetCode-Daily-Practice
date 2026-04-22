/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 1. تمام نمبروں کو ایک Set میں ڈال دیں (تاکہ سرچنگ تیز ہو)
    let mySet = new Set(nums);
    
    // 2. ہم 1 سے گنتی شروع کریں گے اور چیک کریں گے کہ کیا وہ Set میں ہے؟
    let i = 1;
    while (mySet.has(i)) {
        i++; // جب تک نمبر ملتا رہے، آگے بڑھتے رہیں
    }
    
    // 3. جہاں لوپ رکے گا، وہی ہمارا پہلا غائب مثبت نمبر ہوگا
    return i;
};