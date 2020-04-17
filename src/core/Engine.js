export default
class Engine {
  constructor() {
    this.entities = [];
    this.emitters = []; // could this just be components?
    this.systems = [];
  }

  addEmitter(emitter) {
    this.emitters.push(emitter);
  }

  addSystem(system) {
    system.engine = this;
    system.init();
    this.systems.push(system);
  }

  update(deltaTime, time) {
    this.systems
      .filter(system => system.active)
      .forEach(system => {
        system.update(deltaTime, time);
      });
  }
}