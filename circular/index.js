// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const link = require('./linkedlist');
const linkedlist = link.LinkedList;
const Node = link.Node;

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            return true
        }

    }
    return false;
}

const l = new linkedlist();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = null;

console.log(circular(l));

module.exports = circular;
