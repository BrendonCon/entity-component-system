import System from './../core/System.js';

export default class LifeSystem extends System {
  update(deltaTime) {
    this.engine.getEntities().forEach(particle => {
      let { life } = particle.components;

      if (life.currentLife > 0) {
        life.currentLife -= deltaTime * life.multiplier;
      } else {
        particle.active = false;
      }
    });
  }
}