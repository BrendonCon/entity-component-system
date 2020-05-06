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
  destroy() {}
}