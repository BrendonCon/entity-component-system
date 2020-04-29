export class SystemManager {
  constructor() {
    this._Systems = [];
    this._systems = [];
  }

  registerSystem(System) {
    !this._Systems[System] && (this._Systems[System] = System);
  }

  addSystem(system, world) {
    system.world = world;
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
    return this._systems.find(system => {
      return system.constructor.name === name;
    });
  }

  getSystemIndex(system) {
    return this._systems.indexOf(system);
  }

  getSystem(system) {
    let index = this.getSystemIndex(system);
    return (index != -1) && this._systems[index];
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

  init() {
    this._systems.forEach(system => system.init());
  }

  update(deltaTime, time) {
    this._systems
      .filter(system => system.active)
      .forEach(system => system.update(deltaTime, time));
  }

  destroy() {
    this._systems.forEach(system => system.destroy());
  }
}