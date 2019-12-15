class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
  /*
    1. create a new node with the value passed in to the function
    2. if the head is null, set the head & tail to be the new node
    3. else, set the next property on the tail to be the new node
    4. set the previous property on the new node to be the tail
    5. set the tail to be the new node
  */
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

}

