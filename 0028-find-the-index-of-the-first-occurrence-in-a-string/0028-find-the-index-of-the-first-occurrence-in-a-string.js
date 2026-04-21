/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // اگر needle خالی ہے تو 0 واپس کریں
    if (needle === "") return 0;
    
    // indexOf فنکشن کا استعمال کرتے ہوئے پہلی پوزیشن ڈھونڈیں
    return haystack.indexOf(needle);
};