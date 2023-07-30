"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('init');
class MyNodeImpl {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedListImpl {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    printAll() {
        let currentNode = this.head;
        let text = '[';
        while (currentNode !== null) {
            text += currentNode.value;
            currentNode = currentNode.next;
            if (currentNode !== null) {
                text += ', ';
            }
        }
        text += ']';
        console.log(text);
    }
    clearAll() {
        this.head = null;
        this.count = 0;
    }
    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다.');
        }
        const newNode = new MyNodeImpl(data);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head)
                this.head.prev = newNode;
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            if (newNode.next)
                newNode.next.prev = newNode;
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        this.count++;
    }
    insertLast(value) {
        this.insertAt(this.count, value);
    }
    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('범위를 벗어났습니다.');
        }
        if (index === 0) {
            const deletedNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deletedNode;
        }
        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deletedNode;
        }
    }
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }
    getNodeAt(index) {
        if (index > this.count || index < 0) {
            throw new Error('범위를 벗어났습니다.');
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}
exports.default = LinkedListImpl;
const linkedList = new LinkedListImpl();
console.log('---insertAt---');
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.insertAt(2, 3);
linkedList.printAll(); // [1, 2, 3]
console.log('---clearAll---');
linkedList.clearAll();
linkedList.printAll(); // []
console.log('---insertLast---');
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.printAll(); // [1, 2, 3]
console.log('---deleteAt---');
linkedList.deleteAt(2);
linkedList.deleteAt(1);
linkedList.printAll(); // [1]
console.log('---deleteLast---');
linkedList.clearAll();
linkedList.insertLast(4);
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(1);
linkedList.deleteLast();
linkedList.deleteLast();
linkedList.deleteLast();
linkedList.printAll(); // [4]
console.log('---getNodeAt---');
linkedList.clearAll();
linkedList.insertLast(4);
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(1);
console.log(linkedList.getNodeAt(3)); // MyNodeImpl {value: 1, next: null}
