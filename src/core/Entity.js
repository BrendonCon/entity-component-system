export default
class Entity {
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

  hasComponent(name) {
    return !!this.components[name];
  }

  updateComponent(name, data) {
    Object.keys(data).forEach(key => {
      this.components[name][key] = data[key];
    });
  }

  removeComponent(name) {
    this.components[name] = null;
  }
}