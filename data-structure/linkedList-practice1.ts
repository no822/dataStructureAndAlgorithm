    export interface MyNode<T> {
        data: T | null;
        next: MyNode<T> | null;
    }

    class MyNodeImpl<T> implements MyNode<T> {
        data: T | null;
        next: MyNode<T> | null;

        constructor(data: T) {
            this.data = data;
            this.next = null;
        }
    }

    export interface MyLinkedList<T> {
        count: number;
        clear(): void;
        printAll(): void;
        insertAt(index: number, data: T): void;
        insertLast(data: T): void;
        deleteAt(index: number): MyNode<T>;
        deleteLast(): MyNode<T>;
        getNodeAt(index: number): MyNode<T>;
    }

    export default class MyLinkedListImpl<T> implements MyLinkedList<T> {
        head: MyNode<T> | null = null;
        count: number = 0;

        printAll(): void {
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
        };

        clear(): void {
            this.head = null;
            this.count = 0;
        }

        insertAt(index: number, data: T): void {
            if (index > this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }

            const newNode = new MyNodeImpl(data);

            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let currentNode = this.head as MyNode<T>
                ;
                for (let i=0; i<index-1; i++) {
                    currentNode = currentNode.next as MyNode<T>;
                }
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            this.count++;
        }

        insertLast(data: T): void {
            this.insertAt(this.count, data);
        }

        deleteAt(index: number): MyNode<T> {
            if (index >= this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }

            if (index === 0 && this.head) {
                const deletedNode = this.head as MyNode<T>;
                this.head = deletedNode.next;
                this.count--;
                return deletedNode;

            } else {
                let currentNode = this.head as MyNode<T>;
                for (let i=0; i<index-1; i++) {
                    currentNode = currentNode.next as MyNode<T>;
                }
                const deletedNode = currentNode.next as MyNode<T>;
                currentNode.next = deletedNode.next;
                this.count--;
                return deletedNode;
            }
        }

        deleteLast(): MyNode<T> {
            return this.deleteAt(this.count - 1);
        }

        getNodeAt(index: number): MyNode<T> {
            if (index >= this.count || index < 0) {
                throw new Error('범위를 벗어났습니다.');
            }

            let currentNode = this.head as MyNode<T>;

            for (let i=0; i<index; i++) {
                currentNode = currentNode.next as MyNode<T>;
            }
            return currentNode;
        }
    }



//     const linkedList = new MyLinkedListImpl();
//
//     console.log('---insertAt---')
//     linkedList.insertAt(0, 1);
//     linkedList.insertAt(1, 2);
//     linkedList.insertAt(2, 3);
//     linkedList.insertAt(2, 4);
//     linkedList.printAll(); // [1, 2, 4, 3]
//
//     console.log('---clear---')
//     linkedList.clear();
//     linkedList.printAll(); // []
// //
//     console.log('---insertLast---')
//     linkedList.insertLast(1);
//     linkedList.insertLast(2);
//     linkedList.insertLast(3);
//     linkedList.printAll(); // [1, 2, 3]
// //
//     console.log('---deleteAt---')
//     linkedList.deleteAt(0);
//     linkedList.deleteAt(1);
//     linkedList.printAll(); // [2]
//
//     console.log('---deleteLast---')
//     linkedList.clear();
//     linkedList.insertLast(4);
//     linkedList.insertLast(3);
//     linkedList.insertLast(2);
//     linkedList.insertLast(1);
//     linkedList.deleteLast();
//     linkedList.deleteLast();
//     linkedList.deleteLast();
//     linkedList.printAll(); // [4]
// //
//     console.log('---getNodeAt---')
//     linkedList.clear();
//     linkedList.insertLast(4);
//     linkedList.insertLast(3);
//     linkedList.insertLast(2);
//     linkedList.insertLast(1);
//     console.log(linkedList.getNodeAt(3)); // MyNodeImpl {value: 1, next: null}
//     console.log(linkedList.getNodeAt(2)); // MyNodeImpl {value: 2, next: MyNodeImpl}
//
