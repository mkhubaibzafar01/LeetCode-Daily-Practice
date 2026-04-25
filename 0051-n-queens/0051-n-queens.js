/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = Array.from({ length: n }, () => new Array(n).fill('.'));

    // کالمز اور ڈائگنلز کو ٹریک کرنے کے لیے سیٹس (Sets)
    let cols = new Set();
    let posDiag = new Set(); // (r + c)
    let negDiag = new Set(); // (r - c)

    function backtrack(r) {
        // اگر تمام روز (Rows) مکمل ہو گئیں تو ایک حل مل گیا
        if (r === n) {
            let copy = board.map(row => row.join(""));
            result.push(copy);
            return;
        }

        for (let c = 0; c < n; c++) {
            // اگر اس جگہ کوئین رکھنا خطرے سے خالی نہیں تو اگلا کالم دیکھیں
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            // کوئین رکھیں اور ٹریکرز اپ ڈیٹ کریں
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = "Q";

            // اگلی رو (Row) پر جائیں
            backtrack(r + 1);

            // واپسی پر جگہ خالی کریں (Backtrack) تاکہ دوسرے طریقے ڈھونڈے جا سکیں
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = ".";
        }
    }

    backtrack(0);
    return result;
};