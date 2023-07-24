"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_practice1_js_1 = __importDefault(require("./linkedList-practice1.js"));
class StackImpl {
    constructor() {
        this.list = new linkedList_practice1_js_1.default();
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
    push(data) {
        this.list.insertLast(data);
    }
    pop() {
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
stack.push(3);
stack.push(2);
stack.push(1);
console.log(`peak: ${stack.peak().data}`); // 3;
stack.print(); // [3, 2, 1]
console.log('----result----');
