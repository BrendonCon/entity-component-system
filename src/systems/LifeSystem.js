import { System } from './../core/System.js';

export class LifeSystem extends System {
  constructor() {
    super();
    this.components = ['life'];
  }

  update(deltaTime) {
    this.entities.forEach(particle => {
      let { life } = particle.components;

      if (life.currentLife > 0) {
        life.currentLife -= deltaTime * life.multiplier;
      } else {
        particle.active = false;
        this.world.eventManager.trigger('death', particle);
      }
    });
  }
}