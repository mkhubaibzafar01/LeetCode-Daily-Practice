/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    const gainFromNode = (node) => {
        if (node === null) return 0;

        // بائیں اور دائیں طرف سے آنے والا زیادہ سے زیادہ فائدہ (اگر منفی ہو تو 0 لیں)
        let leftGain = Math.max(gainFromNode(node.left), 0);
        let rightGain = Math.max(gainFromNode(node.right), 0);

        // اس مخصوص نوڈ کو 'آخری موڑ' (Bridge) سمجھ کر نیا راستہ چیک کریں
        let currentPathSum = node.val + leftGain + rightGain;

        // اگر یہ راستہ اب تک کا سب سے بڑا ہے، تو اسے محفوظ کر لیں
        maxSum = Math.max(maxSum, currentPathSum);

        // اوپر والے نوڈ کو بتائیں کہ یہاں سے گزرنے کا بہترین فائدہ کیا ہے
        return node.val + Math.max(leftGain, rightGain);
    };

    gainFromNode(root);
    return maxSum;
};