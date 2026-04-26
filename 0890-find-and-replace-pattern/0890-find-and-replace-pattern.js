/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const matches = (word) => {
        let m1 = new Map(), m2 = new Map();
        
        for (let i = 0; i < word.length; i++) {
            let w = word[i];
            let p = pattern[i];
            
            // اگر پہلے سے میپنگ موجود ہے اور وہ میچ نہیں کر رہی
            if (!m1.has(w)) m1.set(w, p);
            if (!m2.has(p)) m2.set(p, w);
            
            if (m1.get(w) !== p || m2.get(p) !== w) return false;
        }
        return true;
    };

    return words.filter(matches);
};