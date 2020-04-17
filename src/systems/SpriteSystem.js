import System from './../core/System.js';

export default class SpriteSystem {
  init() {
    this.engine.entities.forEach(entity => {
      let { sprite } = entity.components;

      if (sprite && sprite.src) {
        sprite.texture.src = sprite.src;
      }
    });
  }
}