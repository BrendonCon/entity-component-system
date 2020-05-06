import { System } from './../core/System.js';
import { Sprite } from './../components/Sprite.js';

export class SpriteSystem extends System {
  constructor() {
    super();
    this.components = [Sprite];
  }

  init() {
    this.entities.forEach(entity => {
      let { sprite } = entity.components;
      sprite.image.src = sprite.src;
    });
  }
}