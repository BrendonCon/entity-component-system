import System from './../core/System.js';

export default class SpriteSystem extends System {
  init() {
    let entities = this.world.getEntitiesByComponents(['sprite']);

    entities.forEach(entity => {
      let { sprite } = entity.components;
      sprite.texture.src = sprite.src;
    });
  }
}