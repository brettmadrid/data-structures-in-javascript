class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hashValue = 0;
    const BIG_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charValue = char.charCodeAt(0);
      hashValue = (hashValue * BIG_PRIME + charValue) % this.keyMap.length;
    }
    return hashValue;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }

  // get(key) {
  //   const hashValue = this._hash(key)
  //   let returnVal = "Not Found!"
  //   for (let i = 0; i < this.keyMap[hashValue].length; i++) {
  //     if (this.keyMap[hashValue][i] === )
  //   }
  // }
}

ht = new HashTable();
ht.set("Jennifer", "shopping");
ht.set("Brett", "javascript");
console.log(ht.set("Anna", "looking hot"));
