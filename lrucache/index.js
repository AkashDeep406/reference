class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}


class LRU {

    constructor(limit = 10) {
        this.head = null;
        this.tail = null;
        this.limit = limit;
        this.size = 0;
        this.cache = {};
    }


    write(key, value) {

        if (!this.head) {
            const node = new Node(key, value);
            this.head = this.tail = node;

        } else {
            const node = new Node(key, value, this.head);
            this.head.prev = node;
            this.head = node;

        }
        this.cache[key] = this.head;
        this.size += 1;


    }
    read(key) {
        if (this.cache[key]) {
            const value = this.cache[key].value;

            this.remove(key);
            this.write(key, value);



            return value;

        }

    }

    remove(key) {
        const node = this.cache[key];
        if (node.prev) {
            this.prev.next = node.next;

        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev

        } else {
            this.tail = node.prev
        }


        delete this.cache[key];
        this.size -= 1;

    }

    withinLimit() {
        if (this.size === this.limit) {
            this.remove(this.tail.key);

        }

    }

    clear() {

        this.head = null;
        this.tail = null;
        this.size = 0;
        this.cache = {};

    }


}