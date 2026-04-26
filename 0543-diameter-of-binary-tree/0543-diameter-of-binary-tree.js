/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    const depth = (node) => {
        if (!node) return 0;

        // بائیں اور دائیں سائیڈ کی ہائٹ نکالیں
        let left = depth(node.left);
        let right = depth(node.right);

        // اس نوڈ پر ڈایامیٹر چیک کریں اور میکسیمم اپ ڈیٹ کریں
        maxDiameter = Math.max(maxDiameter, left + right);

        // اوپر والے نوڈ کو اپنی ہائٹ بتائیں
        return Math.max(left, right) + 1;
    };

    depth(root);
    return maxDiameter;
};