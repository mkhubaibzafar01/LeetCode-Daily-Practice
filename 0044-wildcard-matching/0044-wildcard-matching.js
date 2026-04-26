/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, t) {
    let sIdx = 0, tIdx = 0, starIdx = -1, sTmpIdx = -1;

    while (sIdx < s.length) {
        // اگر حروف میچ کر رہے ہوں یا '?' ہو
        if (tIdx < t.length && (t[tIdx] === '?' || t[tIdx] === s[sIdx])) {
            sIdx++;
            tIdx++;
        } 
        // اگر '*' ملے تو پوزیشن محفوظ کر لیں
        else if (tIdx < t.length && t[tIdx] === '*') {
            starIdx = tIdx;
            sTmpIdx = sIdx;
            tIdx++;
        } 
        // اگر میچ نہ ہو رہا ہو لیکن پیچھے '*' گزر چکا ہو
        else if (starIdx !== -1) {
            tIdx = starIdx + 1;
            sTmpIdx++;
            sIdx = sTmpIdx;
        } 
        // اگر کچھ بھی میچ نہ ہو
        else {
            return false;
        }
    }

    // چیک کریں کہ پیٹرن کے باقی حروف صرف '*' تو نہیں ہیں
    while (tIdx < t.length && t[tIdx] === '*') {
        tIdx++;
    }

    return tIdx === t.length;
};