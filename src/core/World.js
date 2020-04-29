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

  createEntity() {
    return this.entityManager.createEntity();
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

  getEntitiesByComponents(components) {
    return this.entityManager.getEntitiesByComponents(components);
  }

  getActiveEntities() {
    return this.entityManager.getActiveEntities();
  }

  addSystem(system) {
    this.systemManager.addSystem(system, this);
  }

  removeSystem(system) {
    this.systemManager.removeSystem(system);
  }

  play() {
    this.active = true;
  }

  stop() {
    this.active = false;
  }

  init() {
    this.systemManger.init();
  }

  update(deltaTime, time) {
    this.active && this.systemManager.update(deltaTime, time);
  }
}