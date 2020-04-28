import { System } from './../core/System.js';

export class SpriteSystem extends System {
  constructor() {
    super();
    this.components = ['sprite'];
  }

  init() {
    this.entities.forEach(entity => {
      let { sprite } = entity.components;
      sprite.texture.src = sprite.src;
    });
  }
}