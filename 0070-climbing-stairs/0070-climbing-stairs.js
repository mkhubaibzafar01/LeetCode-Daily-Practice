/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1;  // 1 قدم کے لیے طریقے
    let second = 2; // 2 قدم کے لیے طریقے

    for (let i = 3; i <= n; i++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;
};