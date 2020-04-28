export class Component {
  constructor() {
    let { name } = this.constructor;
    this.name = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
    this.active = true;
    this.id = -1; // TODO: Perhaps link to entity id?
  }
}