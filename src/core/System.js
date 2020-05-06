export class System {
  constructor() {
    this.world = undefined;
    this.active = true;
    this.components = [];
  }

  get entities() {
    return this.world.getEntitiesByComponentTypes(this.components);
  }

  play() {
    this.active = true;
  }

  stop() {
    this.active = false;
  }

  init() {}
  destroy() {}
}