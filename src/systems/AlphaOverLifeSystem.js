import System from './../core/System.js';

export default class AlphaOverLifeSystem extends System {
  update() {
    let entities = this.world.getEntitiesByComponents(['life', 'color', 'alphaOverLife']);

    entities.forEach(entity => {
      let { life, color } = entity.components;
      color.alpha = life.currentLife / life.maxLife;
    });
  }
}