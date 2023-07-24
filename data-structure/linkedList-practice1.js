"use strict";
{
    class MyNodeImpl {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class MyLinkedListImpl {
        constructor() {
            this.head = null;
            this.count = 0;
        }
        printAll() {
            let text = '[';
            let currentNode = this.head;
            while (currentNode && currentNode.next) {
                text += currentNode.data + ', ';
                currentNode = currentNode.next;
            }
            if (currentNode) {
                text += currentNode.data;
            }
            text += ']';
            console.log(text);
        }
        ;
        clear() {
            this.head = null;
            this.count = 0;
        }
        insertAt(index, data) {
            if (index > this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }
            const newNode = new MyNodeImpl(data);
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let currentNode = this.head;
                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            this.count++;
        }
        insertLast(data) {
            this.insertAt(this.count, data);
        }
        deleteAt(index) {
            if (index >= this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }
            if (index === 0 && this.head) {
                const deletedNode = this.head;
                this.head = deletedNode.next;
                this.count--;
                return deletedNode;
            }
            else {
                let currentNode = this.head;
                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }
                const deletedNode = currentNode.next;
                currentNode.next = deletedNode.next;
                this.count--;
                return deletedNode;
            }
        }
        deleteLast() {
            return this.deleteAt(this.count - 1);
        }
        getNodeAt(index) {
            if (index >= this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }
    const linkedList = new MyLinkedListImpl();
    console.log('---insertAt---');
    linkedList.insertAt(0, 1);
    linkedList.insertAt(1, 2);
    linkedList.insertAt(2, 3);
    linkedList.insertAt(2, 4);
    linkedList.printAll(); // [1, 2, 4, 3]
    console.log('---clear---');
    linkedList.clear();
    linkedList.printAll(); // []
    //
    console.log('---insertLast---');
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.printAll(); // [1, 2, 3]
    //
    console.log('---deleteAt---');
    linkedList.deleteAt(0);
    linkedList.deleteAt(1);
    linkedList.printAll(); // [2]
    console.log('---deleteLast---');
    linkedList.clear();
    linkedList.insertLast(4);
    linkedList.insertLast(3);
    linkedList.insertLast(2);
    linkedList.insertLast(1);
    linkedList.deleteLast();
    linkedList.deleteLast();
    linkedList.deleteLast();
    linkedList.printAll(); // [4]
    //
    console.log('---getNodeAt---');
    linkedList.clear();
    linkedList.insertLast(4);
    linkedList.insertLast(3);
    linkedList.insertLast(2);
    linkedList.insertLast(1);
    console.log(linkedList.getNodeAt(3)); // MyNodeImpl {value: 1, next: null}
    console.log(linkedList.getNodeAt(2)); // MyNodeImpl {value: 2, next: MyNodeImpl}
}
