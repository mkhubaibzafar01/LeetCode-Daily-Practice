/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // پہلی لسٹ کے آخری نمبر کا انڈیکس
    let j = n - 1; // دوسری لسٹ کے آخری نمبر کا انڈیکس
    let k = m + n - 1; // ملا جلا کر بننے والی لسٹ کا آخری انڈیکس

    // جب تک دوسری لسٹ ختم نہ ہو جائے
    while (j >= 0) {
        // اگر پہلی لسٹ کا نمبر بڑا ہے تو اسے آخر میں رکھیں
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            // ورنہ دوسری لسٹ کا نمبر آخر میں رکھیں
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};