/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0;

    for (let i = 0; i < s.length; i++) {
        // شرط 1: غیر حاضری چیک کریں
        if (s[i] === 'A') {
            absentCount++;
            if (absentCount >= 2) return false;
        }

        // شرط 2: مسلسل تین دن کی تاخیر چیک کریں
        // ہم چیک کریں گے کہ کیا موجودہ اور اگلے دو حروف 'L' ہیں
        if (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') {
            return false;
        }
    }

    return true;
};