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

  // Add to end/tail
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

  // Remove from tail
  pop() {
    /*
      1. if no tail, return undefined
      2. else store current tail in a variable to be returned
      3. if the length is 1, set both the head and tail to be null
      4. update the tail to be the tail's previous node
      5. set the new tail's next to be null
      6. decrement the length
      7. return the removed old tail
    */
    if (!this.head) return undefined;
    else {
      const poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
    }
  }

  // Remove from head
  shift() {
    if (!this.head) return undefined;
    else {
      const oldHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
      this.length--;
      return oldHead;
    }
  }

    // Add to head
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

}

const list = new DoublyLinkedList();
list.push(99)
console.log(list)
list.unshift(98)
console.log(list)



