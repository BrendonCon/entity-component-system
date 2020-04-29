export class Entity {
  static id = 0;

  constructor() {
    this.id = Entity.id++;
    this.name = '';
    this.active = true;
    this.components = {};
  }

  addComponent(component) {
    this.components[component.name] = component;
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

  updateComponent(name, data) {
    Object.keys(data).forEach(key => {
      this.components[name][key] = data[key];
    });
  }

  removeComponent(name) {
    this.components[name] = null;
  }

  removeComponents() {
    Object.keys(this.components).forEach(this.removeComponent);
  }

  disableComponent(name) {
    this.components[name].active = false;
  }

  enableComponent(name) {
    this.components[name].active = true;
  }
}