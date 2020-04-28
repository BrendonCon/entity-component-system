export class System {
  constructor() {
    this.world = undefined;
    this.active = true;
    this.components = [];
  }

  get entities() {
    return this.world.getEntitiesByComponents(this.components);
  }

  init() {}
  update() {}
  destroy() {}
}

/*
function ComponentsRequired(components) {
  return (Class) => {
    return (...args) => {
      let instance = new Class(...args);
      instance.componentsRequired = components;
      return instance;
    };
  }
}

@ComponentsRequired(['life', 'color'])
*/