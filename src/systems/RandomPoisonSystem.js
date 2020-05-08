import System from '../core/System.js';
import Color from '../components/Color.js';

export default class RandomPoisonSystem extends System {
  constructor() {
    super();
    this.components = [Color];
    this.spawnTime = 300;
    this.delta = this.spawnTime;
  }

  update(deltaTime) {
    this.delta += deltaTime;

    if (this.delta >= this.spawnTime) {
      this.delta = 0;

      this.entities
        .filter((entity, i) => i === this.randomIndex())
        .map(this.setEntityColor);
    }
  }

  randomIndex() {
    return Math.random() * this.world.getEntityCount() | 0;
  }

  setEntityColor(entity) {
    entity.components.color.r = 0;
    entity.components.color.g = 255;
    entity.components.color.b = 0;
  }
}
