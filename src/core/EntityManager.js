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

  getEntityByName(name) {
    return this.entities.filter(entity => entity.name === name);
  }

  getEntityById(id) {
    return this.entities.filter(entity => entity.id === id);
  }

  getEntitiesByComponent(name) {
    return this.entities.filter(entity => entity.hasComponent(name));
  }

  getEntitiesByComponentType(Type) {
    return this.entities.filter(entity => entity.hasComponentType(Type));
  }

  getEntitiesByComponentTypes(type) {
    return this.entities.filter(entity => entity.hasComponentTypes(type));
  }

  getEntitiesByComponents(components) {
    return this.entities
      .filter(entity => entity.hasComponents(components));
  }

  getEntitiesComponents() {
    return this.getEntitiesByComponents()
      .map(entity => entity.components);
  }
}