import { System } from './../core/System.js';

export class RandomPoisonSystem extends System {
  components = ['color'];
  spawnTime = 3000;
  delta = this.spawnTime;

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