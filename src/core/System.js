export class System {
  world = undefined;
  active = true;
  components = [];

  get entities() {
    return this.world.getEntitiesByComponents(this.components);
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