import System from './../core/System.js';

export default class AlphaOverLifeSystem extends System {
  update() {
    this.engine.getEntities().forEach(particle => {
      let { life, color, alphaOverLife } = particle.components;

      if (color) {
        color.alpha = life.currentLife / life.maxLife;
      }
    });
  }
}