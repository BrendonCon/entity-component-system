import { System } from './../core/System.js';

export class AlphaOverLifeSystem extends System {
  constructor() {
    super();
    this.components = ['life', 'color', 'alphaOverLife'];
  }

  update() {
    this.entities.forEach(entity => {
      let { life, color } = entity.components;
      color.alpha = life.currentLife / life.maxLife;
    });
  }
}