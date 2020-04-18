export default class SystemManager {
  constructor(world) {
    this._systems = [];
    this.world = world;
  }

  addSystem(system) {
    system.world = this.world;
    system.init();
    this._systems.push(system);
  }

  getActiveSystems() {
    return this._systems.filter(system => system.active);
  }

  update(deltaTime, time) {
    this.getActiveSystems().forEach(system => {
      system.update(deltaTime, time);
    });
  }
}