import { System } from './../core/System.js';

export class SpriteSystem extends System {
  components = ['sprite'];

  init() {
    this.entities.forEach(entity => {
      let { sprite } = entity.components;
      sprite.image.src = sprite.src;
    });
  }
}