/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    let n = stickers.length;
    let counts = Array.from({ length: n }, () => new Array(26).fill(0));
    
    // ہر اسٹیکر کے حروف کی تعداد گن لیں
    for (let i = 0; i < n; i++) {
        for (let char of stickers[i]) {
            counts[i][char.charCodeAt(0) - 97]++;
        }
    }

    let memo = new Map();
    memo.set("", 0);

    function helper(t) {
        if (memo.has(t)) return memo.get(t);

        let tCount = new Array(26).fill(0);
        for (let char of t) tCount[char.charCodeAt(0) - 97]++;

        let minCount = Infinity;

        for (let i = 0; i < n; i++) {
            // آپٹیمائزیشن: صرف وہی اسٹیکر لیں جس میں ٹارگٹ کا پہلا حرف ہو
            if (counts[i][t[0].charCodeAt(0) - 97] === 0) continue;

            let remaining = "";
            for (let j = 0; j < 26; j++) {
                if (tCount[j] > 0) {
                    // اسٹیکر سے حروف کاٹ کر باقی بچنے والے حروف نکالیں
                    let needed = Math.max(0, tCount[j] - counts[i][j]);
                    remaining += String.fromCharCode(j + 97).repeat(needed);
                }
            }

            let res = helper(remaining);
            if (res !== -1) minCount = Math.min(minCount, 1 + res);
        }

        let finalRes = minCount === Infinity ? -1 : minCount;
        memo.set(t, finalRes);
        return finalRes;
    }

    return helper(target);
};