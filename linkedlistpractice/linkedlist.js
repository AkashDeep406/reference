class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }
}


class LinkedList {

    constructor() {
        this.head = null

    }


    insertFirst(data) {
        this.head = new Node(data, this.head)
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
                return node

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


    insetAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;

        }

        if (index === 0) {
            return this.head = new Node(data, this.head);


        }

        let prev = this.getAt(index - 1);
        let node = new Node(data, prev.next);
        prev.next = nodel

    }


    forEach(fn) {
        let node = this.head;
        let count = 0
        while (node) {
            fn(node, counter);
            node = node.next;
            count++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }

    }


}

const list = new LinkedList();
list.insetAt(1);
list.insetAt(2);
list.insetAt(3);
list.insetAt(4);
list.insetAt(5);

for (let node of list) {
    node.data += 10
}



console.log('list', list);