export class Entity {
  static id = 0;

  constructor() {
    this.id = Entity.id++;
    this.active = true;
    this.components = {};
  }

  addComponent(component) {
    let protoName = component.constructor.name;
    let name = `${protoName.charAt(0).toLowerCase()}${protoName.slice(1)}`;
    this.components[name] = component;
  }

  getComponent(Type) {
    return Object.values(this.components).find(component => component instanceof Type);
  }

  hasComponent(Type) {
    return !!this.getComponent(Type);
  }

  hasComponents(types) {
    return types.every(type => this.hasComponent(type));
  }
}