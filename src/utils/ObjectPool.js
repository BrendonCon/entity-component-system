/** Class to create object pools */
export default class ObjectPool {
  /**
   * Constructs a new objectPool
   * @param {object} Type - Type to pool
   * @param {number} size - Size of the object pool
   */
  constructor(Type, size) {
    this.Type = Type;
    this.size = size;
    this.freeIndex = 0;
    this.nextFreeIndex = -1;
    this.pool = new Array(this.size);
  }

  /**
   * Initializes object pool
   * @return {void}
   */
  init() {
    for (let i = 0; i < this.size; i++) {
      this.pool[i] = new this.Type();
    }
  }

  /**
   * Gets a fee object form the pool and grows the pool if needed
   * @return {object} a new object from the pool
   */
  get() {
    if (this.nextFreeIndex !== -1) {
      const obj = this.pool[this.nextFreeIndex];
      this.nextFreeIndex = -1;
      return obj;
    }

    if (this.freeIndex >= this.size) this.grow();

    return this.pool[this.freeIndex++];
  }

  /**
   * frees an object available for use
   * @param {object} obj - object to be freed back to the pool
   * @return {void}
   */
  free(obj) {
    const index = this.pool.indexOf(obj);

    if (index !== -1) {
      this.nextFreeIndex = index;
    }
  }

  /**
   * Grows the object pool by the input amount
   * @param {number} newSize - additional size to grow the pool by
   * @return {void}
   */
  grow(newSize = 100) {
    for (let i = this.size; i < this.size + newSize - 1; i++) {
      this.pool[i] = new this.Type();
    }

    this.size += newSize;
  }

  /**
   * Gets the current size of the pool
   * @return {number} - pool size
   */
  getSize() {
    return this.size;
  }

  /**
   * Resets the object pool to an empty state
   * @return {void}
   */
  reset() {
    this.pool.length = 0;
    this.size = 0;
    this.freeIndex = 0;
    this.nextFreeIndex = -1;
  }
}
