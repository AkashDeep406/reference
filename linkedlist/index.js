// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);

    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;

        }

        return count;
    }

    getFirst() {
        return this.head;

    }


    getLast() {
        if (!this.head) {
            return;

        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;

        }

    }

    clear() {
        this.head = null;

    }

    removeFirst() {
        if (!this.head) {
            return;

        }

        this.head = this.head.next;

    }

    removeLast() {
        if (!this.head) {
            return;

        }

        if (!this.head.next) {
            this.head = null;
            return;

        }

        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }


    insertLast(data) {

        let lastNode = this.getLast();
        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }

    }

    getAt(index) {
        let count = 0;
        let node = this.head;

        while (node) {
            if (count === index) {
                return node;
            }
            node = node.next;
            count += 1;

        }

        return null;

    }

    removeAt(index) {
        if (!this.head) {
            return;

        }

        if (index === 0) {
            this.head = this.head.next;
            return;

        }

        let prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }


    insertAt(data, index) {

        if (!this.head) {
            this.head = new Node(data);
            return;

        }
        if (index === 0) {
            return this.head = new Node(data, this.head);
        }


        let prev = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, prev.next);
        prev.next = node;

    }

    



}


module.exports = { Node, LinkedList };
