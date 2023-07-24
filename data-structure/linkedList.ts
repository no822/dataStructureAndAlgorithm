console.log('init');

interface MyNode<T> {
    value: T;
    next: MyNode<T> | null;
}

 class MyNodeImpl<T> implements MyNode<T> {
    value: T;
    next: MyNode<T> | null;
    constructor(value: T, next: MyNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

interface LinkedList<T> {
    printAll(): void;
    clearAll(): void;
    insertAt(index: number, data: T): void;
    insertLast(data: T): void;
    deleteAt(index: number): MyNode<T>;
    deleteLast(): MyNode<T>;
    getNodeAt(index: number): MyNode<T>;
}

export default class LinkedListImpl<T> implements LinkedList<T>{
    private head: MyNode<T> | null = null;
    private count: number = 0;


    printAll(): void {
        let currentNode = this.head;
        let text = '[';
        while(currentNode !== null) {
            text += currentNode.value;
            currentNode = currentNode.next;

            if (currentNode !== null) {
                text += ', ';
            }
        }
        text += ']';
        console.log(text)
    }

    clearAll() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index: number, data: T): void {
        if (index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다.');
        }

        const newNode: MyNode<T> | null = new MyNodeImpl(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;

        } else {
            let currentNode = this.head as MyNode<T>;

            for (let i=0; i<index-1; i++) {
                currentNode = currentNode.next as MyNode<T>;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(value: T): void {
        this.insertAt(this.count, value);
    }

    deleteAt(index: number): MyNode<T> {
        if (index >= this.count || index < 0) {
            throw new Error('범위를 벗어났습니다.');
        }

        if (index === 0) {
            const deletedNode = this.head as MyNode<T>;
            this.head = (this.head as MyNode<T>).next ;
            this.count--;
            return deletedNode;

        } else {
            let currentNode = this.head as MyNode<T>;
            for (let i=0; i<index-1; i++) {
                currentNode = currentNode.next as MyNode<T>;
            }
            let deletedNode = currentNode.next as MyNode<T>;
            currentNode.next = (currentNode.next as MyNode<T>).next;
            this.count--;
            return deletedNode;
        }
    }

    deleteLast(): MyNode<T> {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index: number): MyNode<T> {
        if (index > this.count || index < 0) {
            throw new Error('범위를 벗어났습니다.');
        }
        let currentNode = this.head as MyNode<T>;
        for (let i=0; i<index; i++) {
            currentNode = currentNode.next as MyNode<T>;
        }
        return currentNode;
    }
}

const linkedList = new LinkedListImpl();

console.log('---insertAt---')
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.insertAt(2, 3);
linkedList.printAll(); // [1, 2, 3]

console.log('---clearAll---')
linkedList.clearAll();
linkedList.printAll(); // []

console.log('---insertLast---')
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.printAll(); // [1, 2, 3]

console.log('---deleteAt---')
linkedList.deleteAt(2);
linkedList.deleteAt(1);
linkedList.printAll(); // [1]

console.log('---deleteLast---')
linkedList.clearAll();
linkedList.insertLast(4);
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(1);
linkedList.deleteLast();
linkedList.deleteLast();
linkedList.deleteLast();
linkedList.printAll(); // [4]

console.log('---getNodeAt---')
linkedList.clearAll();
linkedList.insertLast(4);
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(1);
console.log(linkedList.getNodeAt(3)); // MyNodeImpl {value: 1, next: null}
