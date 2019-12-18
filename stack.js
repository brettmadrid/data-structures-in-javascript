class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null
    }
    const value = this.first.value;
    if (this.size === 1) {
      this.first = null;
      this.tail = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return value;
  }

}


