export class SystemManager {
  constructor(world) {
    this._systems = [];
    this._world = world;
  }

  addSystem(system) {
    system.world = this._world;
    system.init();
    this._systems.push(system);
  }

  removeSystem(system) {
    let index = this.getSystemIndex(system);

    if (index != -1) {
      this._systems[index].destroy();
      this._systems.splice(index, 1);
    }
  }

  getSystemByName(name) {
    return this._systems.filter(system => {
      return system.constructor.name === name;
    });
  }

  getSystemIndex(system) {
    return this._systems.indexOf(system);
  }

  getSystems() {
    return this._systems;
  }

  getSystemCount() {
    return this._systems.length;
  }

  getActiveSystems() {
    return this._systems.filter(system => system.active);
  }

  getDeactivatedSystems() {
    return this._systems.filter(system => !system.active);
  }

  activateSystem() {

  }

  deactivateSystem() {

  }

  update(deltaTime, time) {
    this.getActiveSystems().forEach(system => {
      system.update(deltaTime, time);
    });
  }

  destroy() {
    this._systems.forEach(system => system.destroy());
  }
}