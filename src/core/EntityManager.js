import { Entity } from './Entity.js';

export class EntityManager {
  constructor() {
    this._entities = [];
  }

  get entities() {
    return this._entities.filter(entity => entity.active);
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

  getEntitiesByComponent(name) {
    return this.entities.filter(entity => entity.hasComponent(name));
  }

  getEntitiesByComponents(type) {
    return this.entities.filter(entity => entity.hasComponents(type));
  }
}