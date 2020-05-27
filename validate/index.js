// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
/**
 *       10 [min and max]
 *       /  \  
 *       0  12
 *      /\
 *      -1 4
 *      /\
 *       15 
 *    
 */
const Node = require('./node');
function validate(node, min = null, max = null) {
    let data = node.data;//15 min= -1
    console.log(':::data:::', data);
    console.log(':::min:::', min);
    console.log(':::max:::', max);
    if (max !== null && data > max) {
        return false;
    }


    if (min !== null && data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false

    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false

    }

    return true;



}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
n.left.left.right = new Node(999);


console.log(validate(n));


module.exports = validate;
