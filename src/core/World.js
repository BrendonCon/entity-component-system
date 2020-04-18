import EntityManager from './EntityManager.js';
import SystemManager from './SystemManager.js';

export default class World {
  constructor() {
    this.systemManger = new SystemManager(this);
    this.entityManager = new EntityManager(this);
    this.active = true;
  }

  addEntity(entity) {
    this.entityManager.addEntity(entity);
  }

  getEntities() {
    return this.entityManager.getEntities();
  }

  getEntitiesByComponents(components) {
    return this.entityManager.getEntitiesByComponents(components);
  }

  addSystem(system) {
    this.systemManger.addSystem(system);
  }

  getActiveEntities() {
    return this.entityManager.getActiveEntities();
  }

  getActiveEmitters() {
    return this.emitters.filter(emitter => emitter.active);
  }

  update(deltaTime, time) {
    this.active && this.systemManger.update(deltaTime, time);
  }
}