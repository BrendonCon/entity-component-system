export default class ObjectPool {
  constructor(Class, count) {
    this.Class = Class;
    this.count = count;
    this.pool = [];
    this.freeIndex = -1;
    this.preallocate(Class, count);
  }

  preallocate(Class = this.Class, count) {
    this.freeIndex = count;

    for (let i = 0; i < count; i++) {
      this.pool.push(new Class());
    }
  }

  allocate() {
    if (!this.freeIndex) {
      throw new Error('Grow your object pool!');
    }

    return this.pool[this.pool.length - this.freeIndex--];
  }

  deallocate(obj) {
    this.pool[this.freeIndex++] = obj;
  }

  clear() {
    this.pool.length = 0;
    this.freeIndex = -1;
  }
}
