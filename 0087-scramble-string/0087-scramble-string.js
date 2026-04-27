/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let memo = {};

var isScramble = function(s1, s2) {
    let key = s1 + "-" + s2;
    if (memo[key] !== undefined) return memo[key];
    
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    
    // Anagram Check: اگر حروف ہی برابر نہیں تو آگے جانے کی ضرورت نہیں
    if (!isAnagram(s1, s2)) {
        memo[key] = false;
        return false;
    }

    let n = s1.length;
    for (let i = 1; i < n; i++) {
        // صورت 1: بغیر بدلے چیک کریں
        if (isScramble(s1.substring(0, i), s2.substring(0, i)) && 
            isScramble(s1.substring(i), s2.substring(i))) {
            return memo[key] = true;
        }
        
        // صورت 2: بدل کر (Swap) چیک کریں
        if (isScramble(s1.substring(0, i), s2.substring(n - i)) && 
            isScramble(s1.substring(i), s2.substring(0, n - i))) {
            return memo[key] = true;
        }
    }

    return memo[key] = false;
};

function isAnagram(s1, s2) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }
    return count.every(c => c === 0);
}