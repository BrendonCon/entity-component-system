import { System } from './../core/System.js';
import { Life } from './../components/Life.js';

export class LifeSystem extends System {
  constructor() {
    super();
    this.components = [Life];
  }

  update(deltaTime) {
    this.entities.forEach(entity => {
      let { life } = entity.components;

      if (life.currentLife > 0) {
        life.currentLife -= deltaTime * life.multiplier;
      } else {
        entity.active = false;
      }
    });
  }
}