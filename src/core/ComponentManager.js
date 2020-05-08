// TODO: Figure this out!!
export default class ComponentManager {
  constructor() {
    this._Components = { };
  }

  registerComponent(Component) {
    this._Components[Component] = Component;
  }

  addComponent(entity, component) {
    entity.components[component.name] = component;
  }

  getComponent(entity, name) {
    return entity.components[name];
  }

  getComponents(entity, components) {
    return components.map(component => entity.components[component]);
  }

  hasComponent(entity, name) {
    return !!entity.components[name];
  }

  hasComponents(entity, components) {
    return components.every(component => entity.components[component]);
  }

  updateComponent(entity, name, data) {
    Object.keys(data).forEach(key => {
      entity.components[name][key] = data[key];
    });
  }

  removeComponent(entity, name) {
    entity.components[name] = null;
  }

  removeAllComponents(entity) {
    Object.keys(entity.components).forEach(this.removeComponent);
  }
}
