class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this
  }

  pop() {
    // if empty
    if (!this.head) return undefined;

    // start at the head
    let current = this.head;
    let newTail = this.current;
    
    // as long as there is a .next node
    // loop through to the end
    // the newTail, since it lags behind one
    // becomes the next to the last node
    while (current.next) {
      // set tail back one - it lags behind
      newTail = current;
      // set current to the next node
      // it will ultimately become the last node 
      // that needs to be poppeed
      current = current.next;
    }
    // now that we are at the end, set new tail
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // if only one item in the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return current;
  }

  // SHIFT - REMOVE FROM HEAD
  shift() {
  // if empty, return undefined
    if (!this.head) return undefined;
  // temp = head
    let oldHead = this.head;
  // head = head.next
    this.head = oldHead.next;
  // decrement length by 1
    this.length--;
    // if list is now empty after removing head
    // reset tail to null
    if(this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  // insert at head
  unshift(val) {
    const newHead = new Node(val);
    // if list is empty
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;

    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current_node = this.head; // start at the head
    for (let i = 0; i < index; i++) {
      current_node = current_node.next
    }
    return current_node;
  }

  // set a value at a given index
  set(index, value) {
    let current_node = get(index)
    if (current_node) {
      current_node.val = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    // if index is the last item, push onto the end
    if (index === this.length-1) return !!this.push(val)
    // if index is first item, insert at head
    if (index === 0) return !!this.unshift(val)

    const prev = get(index - 1);
    const newNode = new Node(val);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length-1) return !!this.pop();
    if (index === 0) return !!this.shift(val)

    const prev = get(index -1);
    const removedNode = prev.next;
    prev.next = removedNode.next;
    this.length--;
    return removedNode;
  }
}

  

// let list = new SinglyLinkedList();
// list.push("time")
// list.push("to")
// list.push("take")
// list.push("a")
// list.push("break")
// // list.pop()
// // list.tail
// // list.unshift("It is")
// list.get(4)