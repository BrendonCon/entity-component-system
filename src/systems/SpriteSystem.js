import System from '../core/System.js';
import Sprite from '../components/Sprite.js';

export default class SpriteSystem extends System {
  constructor() {
    super();
    this.components = [Sprite];
  }

  init() {
    this.entities.forEach((entity) => {
      const { sprite } = entity.components;
      sprite.image.src = sprite.src;
    });
  }
}
