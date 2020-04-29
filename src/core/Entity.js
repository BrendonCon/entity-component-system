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

  getComponent(name) {
    return this.components[name];
  }

  getComponents(components) {
    return components.map(component => this.components[component]);
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

  disableComponent(name) {
    this.components[name].active = false;
  }

  enableComponent(name) {
    this.components[name].active = true;
  }

  removeAllComponents() {
    Object.keys(this.components).forEach(this.removeComponent);
  }
}