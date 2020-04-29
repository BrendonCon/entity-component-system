export class System {
  world = undefined;
  active = true;
  components = [];

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
  update() {}
  destroy() {}
}