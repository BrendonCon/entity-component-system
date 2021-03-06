export default class EventManager {
  constructor() {
    this._events = {};
  }

  subscribe(name, fn) {
    if (!this._events[name]) (this._events[name] = []);
    this._events[name].push(fn);
  }

  unsubscribe(name, fn) {
    const index = this._events[name].indexOf(fn);
    if (index !== -1) this._events[name].splice(index, 1);
  }

  publish(name, data) {
    if (!this._events[name]) return;
    this._events[name].forEach(listener => listener(data));
  }

  getListenerCount(name) {
    return this._events[name] ? this._events[name].length : -1;
  }

  getTotalListenerCount() {
    return Object.keys(this._events)
      .reduce((total, current) => total + this._events[current].length, 0);
  }

  sub(name, fn) {
    this.subscribe(name, fn);
  }

  unsub(name, fn) {
    this.unsubscribe(name, fn);
  }

  pub(name, data) {
    this.publish(name, data);
  }

  on(name, fn) {
    this.subscribe(name, fn);
  }

  off(name, fn) {
    this.unsubscribe(name, fn);
  }

  trigger(name, data) {
    this.publish(name, data);
  }

  addEventListener(name, fn) {
    this.subscribe(name, fn);
  }

  removeEventListener(name, fn) {
    this.unsubscribe(name, fn);
  }

  triggerEvent(name, data) {
    this.publish(name, data);
  }

  sendMessage(name, data) {
    this.publish(name, data);
  }

  onMessage(name, fn) {
    this.subscribe(name, fn);
  }

  onEvent(name, fn) {
    this.subscribe(name, fn);
  }
}
