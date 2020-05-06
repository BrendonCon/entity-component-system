export class Entity {
  static id = 0;

  constructor() {
    this.id = Entity.id++;
    this.name = '';
    this.active = true;
    this.components = {};
  }

  addComponent(component) {
    let protoName = component.constructor.name;
    let name = `${protoName.charAt(0).toLowerCase()}${protoName.slice(1)}`;
    this.components[name] = component;
  }

  getComponentByName(name) {
    return this.components[name];
  }

  getComponentsByName(components) {
    return components.map(component => this.components[component]);
  }

  getComponentByType(Type) {
    return Object.values(this.components).find(component => component instanceof Type);
  }

  hasComponentType(Type) {
    return !!this.getComponentByType(Type);
  }

  hasComponentTypes(types) {
    return types.every(type => this.hasComponentType(type));
  }

  hasComponent(name) {
    return !!this.components[name];
  }

  hasComponents(components) {
    return components.every(component => this.components[component]);
  }

  removeComponent(name) {
    this.components[name] = null;
  }
}