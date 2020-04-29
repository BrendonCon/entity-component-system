import { System } from './../core/System.js';
import { Life } from './../components/Life.js';

export class LifeSystem extends System {
  components = [Life];

  update(deltaTime) {
    this.entities.forEach(particle => {
      let { life } = particle.components;

      if (life.currentLife > 0) {
        life.currentLife -= deltaTime * life.multiplier;
      } else {
        particle.active = false;
      }
    });
  }
}