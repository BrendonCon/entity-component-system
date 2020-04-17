export default class Engine {
  constructor() {
    this.entities = [];
    this.emitters = [];
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

  getEntities() {
    return this.entities.filter(entity => entity.active);
  }

  getEmitters() {
    return this.emitters.filter(emitter => emitter.active);
  }

  getSystems() {
    return this.systems.filter(system => system.active);
  }

  update(deltaTime, time) {
    this.getSystems().forEach(system => { 
      system.update(deltaTime, time);
    });
  }
}