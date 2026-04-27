/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    // dp[k] یہاں اسٹور کرے گا کہ k انڈوں کے ساتھ کتنی منزلیں چیک ہو سکتی ہیں
    let dp = new Array(k + 1).fill(0);
    let moves = 0;

    // جب تک ہم n منزلوں تک نہیں پہنچ جاتے
    while (dp[k] < n) {
        moves++;
        // ہم پیچھے سے اپ ڈیٹ کریں گے تاکہ پچھلے موو کا ڈیٹا استعمال ہو سکے
        for (let j = k; j > 0; j--) {
            dp[j] = dp[j] + dp[j - 1] + 1;
        }
    }

    return moves;
};