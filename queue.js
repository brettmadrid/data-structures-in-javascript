class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const popValue = this.first.value;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return popValue;
  }

}


let queue = new Queue();
console.log(queue.push("First"))
console.log(queue.push("Second"))
console.log(queue.push("Third"))
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())