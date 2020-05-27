// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

    constructor(data) {
        this.data = data;
        this.children = [];

    }

    add(data) {
        const newNode = new Node(data);
        this.children.push(newNode);
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data
        })

    }

}

class Tree {

    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            let node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }

    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            let node = arr.shift()
            arr.unshift(...node.children);
            fn(node);

        }
    }

}



let treeStruct = []
const tree = new Tree();
tree.root = new Node('a');
tree.root.add('b')
tree.root.add('c')
tree.root.children[0].add('d');
tree.root.children[0].add('f');
tree.root.children[0].children[0].add('g');
tree.root.children[1].add('e');

tree.traverseDF((node) => {
    treeStruct.push(node);

    console.log("treeStruct", treeStruct);

})

module.exports = { Tree, Node };
