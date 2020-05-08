export default class SystemManager {
  constructor() {
    this._systems = [];
    this._updateSystems = [];
  }

  addSystem(system, world) {
    system.world = world;
    system.init();
    if (system.update) this._updateSystems.push(system);
    this._systems.push(system);
  }

  getSystemIndex(system) {
    return this._systems.indexOf(system);
  }

  getSystem(system) {
    const index = this.getSystemIndex(system);
    return (index !== -1) && this._systems[index];
  }

  getActiveSystems() {
    return this._systems.filter(system => system.active);
  }

  getDeactivatedSystems() {
    return this._systems.filter(system => !system.active);
  }

  update(deltaTime, time) {
    this._updateSystems
      .filter(system => system.active)
      .forEach(system => system.update(deltaTime, time));
  }
}
