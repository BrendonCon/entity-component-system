import { EntityManager } from './EntityManager.js';
import { SystemManager } from './SystemManager.js';
import { EventManager } from './EventManager.js';
import { ComponentManager } from './ComponentManager.js';

export class World {
  constructor() {
    this.entityManager = new EntityManager(this);
    this.componentManager = new ComponentManager(this);
    this.systemManger = new SystemManager(this);
    this.eventManager = new EventManager();
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

  play() {
    this.active = true;
  }

  stop() {
    this.active = false;
  }

  update(deltaTime, time) {
    this.active && this.systemManger.update(deltaTime, time);
  }
}