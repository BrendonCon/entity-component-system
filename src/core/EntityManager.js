import { Entity } from './Entity.js';

export class EntityManager {
  constructor(world) {
    this._world = world;
    this._entities = [];
  }

  createEntity() {
    return new Entity();
  }

  addEntity(entity) {
    this._entities.push(entity);
  }

  getEntities() {
    return this._entities;
  }

  getEntityCount() {
    return this._entities.length;
  }

  getActiveEntities() {
    return this._entities.filter(entity => entity.active);
  }

  getEntityByName(name) {
    return this._entities.filter(entity => entity.name === name);
  }

  getEntityById(id) {
    return this._entities.filter(entity => entity.id === id);
  }

  getEntitiesByComponent(name) {
    return this._entities.filter(entity => entity.hasComponent(name));
  }

  getEntitiesByComponents(components) {
    return this._entities.filter(entity => entity.hasComponents(components));
  }
}