import { System } from './../core/System.js';
import { Transform } from './../components/Transform.js';
import { Life } from './../components/Life.js';
import { ScaleOverLife } from './../components/ScaleOverLife.js';

export class ScaleOverLifeSystem extends System {
  constructor() {
    super();
    this.components = [Life, Transform, ScaleOverLife];
  }

  update() {
    this.entities.forEach(entity => {
      let { life, transform, scaleOverLife } = entity.components;
      let n = 1.0 - (life.currentLife / life.maxLife);
      let scale = n * (scaleOverLife.end - scaleOverLife.start) + scaleOverLife.start;
      
      transform.scale.x = scale;
      transform.scale.y = scale;
    });
  }
}