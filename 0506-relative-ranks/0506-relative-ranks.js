/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // 1. اسکورز کو بڑے سے چھوٹے کی ترتیب میں ترتیب دیں
    const sortedScore = [...score].sort((a, b) => b - a);
    const map = new Map();

    // 2. میڈلز اور رینکس کو میپ میں اسٹور کریں
    for (let i = 0; i < sortedScore.length; i++) {
        if (i === 0) map.set(sortedScore[i], "Gold Medal");
        else if (i === 1) map.set(sortedScore[i], "Silver Medal");
        else if (i === 2) map.set(sortedScore[i], "Bronze Medal");
        else map.set(sortedScore[i], (i + 1).toString());
    }

    // 3. اصل لسٹ کے حساب سے رزلٹ تیار کریں
    return score.map(s => map.get(s));
};