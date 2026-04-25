/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];

    // پہلی لسٹ کے نمبروں کو گن کر 'Map' میں رکھ لیں
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    // دوسری لسٹ کے نمبر چیک کریں
    for (let num of nums2) {
        // اگر وہ نمبر Map میں موجود ہے اور اس کی تعداد 0 سے زیادہ ہے
        if (map[num] > 0) {
            result.push(num); // رزلٹ میں ڈالیں
            map[num]--; // تعداد ایک کم کر دیں
        }
    }

    return result;
};