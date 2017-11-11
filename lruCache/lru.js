var LRUCache = function (limit) {
  this.items = {};
  this.cache = new List();
  this.limit = limit || 10000;
  this.size = 0;
  };

var LRUCacheItem = function (val, key) {
  this.val = val === undefined ? null : val;
  this.key = key === undefined ? null : key;
  this.node = null;
  };

LRUCache.prototype.size = function () {
  return this.size;
  };

LRUCache.prototype.get = function (key) {
  if (!(key in this.items)) { return null; }
  var item = this.items[key];
  this.promote(item);
  return item.val;
  };

LRUCache.prototype.set = function (key, val) {
  var item;
  if (key in this.items) {
    item = this.items[key];
    item.val = val;
    this.promote(item);
  } else {
    if (this.full()) { this.prune(); }
    this.size += 1;
    item = new LRUCacheItem(val, key);
    item.node = this.cache.unshift(item);
    this.items[key] = item;
  }
};


LRUCache.prototype.full = function () {
  return this.size >= this.limit;
};

LRUCache.prototype.prune = function () {
  var oldest = this.cache.pop();
  delete this.items[oldest.key];
  this.size = Math.max(0, this.size - 1);
};

LRUCache.prototype.promote = function (item) {
  this.cache.moveToFront(item.node);
};

var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

List.prototype.unshift = function (val) {
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

List.prototype.shift = function () {
  if (this.head === null && this.tail === null) {
    return null;
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

List.prototype.push = function (val) {
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }
  return this.tail;
};

List.prototype.pop = function () {
  if (this.head === null && this.tail === null) {
    return null;
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }
  node.prev = node.next = null;
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }
  node.prev = node.next = null;
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};
