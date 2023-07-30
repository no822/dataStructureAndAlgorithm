import MyLinkedListImpl, {MyLinkedList, MyNode} from "./linkedList-practice1.js";



interface Stack<T> {
    peak(): MyNode<T>;
    push(data: T): void;
    pop(): MyNode<T>;
    size(): number;
}

class StackImpl<T> implements Stack<T> {
    private list: MyLinkedList<T>;
    constructor() {
        this.list = new MyLinkedListImpl();
    }

    print() {
        return this.list.printAll();
    }

    size() {
        return this.list.count;
    }

    peak() {
        return this.list.getNodeAt(0);
    }

    push(data: T) {
        this.list.insertLast( data);
    }

    pop(): MyNode<T> {
        return this.list.deleteAt(0);
    }
}

const stack = new StackImpl();

console.log('----push-----');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print(); // [1, 2, 3, 4]

console.log('----pop----');
stack.pop();
stack.pop();
stack.pop();
stack.print(); // [4]

console.log('----peak----');
stack.pop();
stack.push(3);
stack.push(2);
stack.push(1);
console.log(`peak: ${stack.peak().data}`); // peak: 3;
stack.print(); // [3, 2, 1]

console.log('----result----');
