/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(!root) return true
    if(root.val <= min || root.val >= max) return false
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};

var root = new TreeNode(5, new TreeNode(1, new TreeNode(0), new TreeNode(6)), new TreeNode(8, new TreeNode(7), new TreeNode(9)))
var a = isValidBST(root)
''