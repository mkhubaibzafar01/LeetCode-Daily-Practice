/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let res = [];
    
    // 1. Trie بنانا
    const buildTrie = () => {
        let root = {};
        for (let word of words) {
            let node = root;
            for (let char of word) {
                if (!node[char]) node[char] = {};
                node = node[char];
            }
            node.word = word; // لفظ کے آخر میں پورا لفظ اسٹور کریں
        }
        return root;
    };

    let root = buildTrie();

    // 2. Backtracking فنکشن
    const backtrack = (r, c, node) => {
        let char = board[r][c];
        if (!node[char]) return;
        
        let nextNode = node[char];
        if (nextNode.word) {
            res.push(nextNode.word);
            nextNode.word = null; // دوبارہ نہ ملنے کے لیے
        }

        board[r][c] = '#'; // وزٹ کیا ہوا مارک کریں
        
        // چاروں سمتوں میں چیک کریں
        let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dr, dc] of dirs) {
            let row = r + dr, col = c + dc;
            if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
                backtrack(row, col, nextNode);
            }
        }
        
        board[r][c] = char; // واپس آتے ہوئے حرف بحال کریں (Backtrack)
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            backtrack(i, j, root);
        }
    }

    return res;
};