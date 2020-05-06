import { EntityManager } from './EntityManager.js';
import { ComponentManager } from './ComponentManager.js';
import { SystemManager } from './SystemManager.js';
import { EventManager } from './EventManager.js';

export class World {
  constructor() {
    this.entityManager = new EntityManager();
    this.componentManager = new ComponentManager();
    this.systemManager = new SystemManager();
    this.eventManager = new EventManager();
    this.active = true;
  }

  addEntity(entity) {
    this.entityManager.addEntity(entity);
  }

  getAllEntities() {
    return this.entityManager.getEntities();
  }

  getEntityCount() {
    return this.entityManager.getEntityCount();
  }

  getEntitiesByComponents(types) {
    return this.entityManager.getEntitiesByComponents(types);
  }

  addSystem(system) {
    this.systemManager.addSystem(system, this);
  }

  update(deltaTime, time) {
    this.active && this.systemManager.update(deltaTime, time);
  }
}