class HashTable {
  constructor(size = 53) {
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
}
