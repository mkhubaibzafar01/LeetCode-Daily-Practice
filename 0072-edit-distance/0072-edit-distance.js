/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    
    // ایک 2D ٹیبل (DP Table) بنائیں
    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // ٹیبل کی پہلی رو اور کالم کو بھریں
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // پورے ٹیبل کو لاجک کے ساتھ بھریں
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // اگر حروف برابر ہیں تو پچھلا رزلٹ ہی کافی ہے
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // اگر برابر نہیں تو کم سے کم آپریشن (Insert, Delete, Replace) تلاش کریں
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // Delete
                    dp[i][j - 1],    // Insert
                    dp[i - 1][j - 1] // Replace
                );
            }
        }
    }

    return dp[m][n];
};