export default
class Component {
  constructor() {
    let { name } = this.constructor;
    this.name = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
    this.active = true;
  }
}