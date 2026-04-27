/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    // 1. سوال کو Jump Game میں بدلیں
    const maxReach = new Array(n + 1).fill(0);
    
    for (let i = 0; i < ranges.length; i++) {
        let left = Math.max(0, i - ranges[i]);
        let right = Math.min(n, i + ranges[i]);
        maxReach[left] = Math.max(maxReach[left], right);
    }

    // 2. Jump Game کی لاجک لگائیں
    let taps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n; i++) {
        farthest = Math.max(farthest, maxReach[i]);

        // اگر ہم آگے ہی نہیں بڑھ پا رہے تو ناممکن ہے
        if (farthest <= i) return -1;

        if (i === currentEnd) {
            taps++;
            currentEnd = farthest;
        }
    }

    return currentEnd >= n ? taps : -1;
};