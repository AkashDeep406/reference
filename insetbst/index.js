/****
 * Insert into a BinaryST
 * 
 */

const Node = require('./node');

const insertBST = (root, val) => {

    if (!root) {
        root = new Node(val);
    }

    if (val < root.val) {
        root.left = insertBST(root.left, val);

    }
    if (val > root.val) {
        root.right = insertBST(root.right, val);
    }


    return root;
}