import System from '../core/System.js';
import Color from '../components/Color.js';
import Life from '../components/Life.js';
import AlphaOverLife from '../components/AlphaOverLife.js';

export default class AlphaOverLifeSystem extends System {
  constructor() {
    super();
    this.components = [Life, Color, AlphaOverLife];
  }

  update() {
    this.entities.forEach(entity => {
      const { life, color } = entity.components;
      color.alpha = life.currentLife / life.maxLife;
    });
  }
}
