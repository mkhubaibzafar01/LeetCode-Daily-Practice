/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    // ایک 2D Array بنائیں اور اسے 0 سے بھر دیں
    // dp[i][j] کا مطلب ہے s کے پہلے i حروف میں t کے پہلے j حروف کتنی بار ہیں
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // اگر t خالی ہے، تو s کا ہر حصہ اسے ایک بار (خالی طور پر) رکھ سکتا ہے
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // اگر حروف مل جائیں
            if (s[i - 1] === t[j - 1]) {
                // (حرف استعمال کیا) + (حرف استعمال نہیں کیا)
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // اگر حروف نہ ملیں، تو پچھلا رزلٹ ہی کاپی کریں
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
};