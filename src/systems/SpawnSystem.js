import { System } from './../core/System.js';
import { Enemy } from './../prefabs/Enemy.js';

export class SpawnSystem extends System {
  spawnTime = 2000;
  delta = this.spawnTime;
  active = false;

  update(deltaTime) {
    this.delta += deltaTime;

    if (this.delta >= this.spawnTime) {
      this.delta = 0;
      let e = new Enemy();
      e.components.transform.position.x = Math.random() * window.innerWidth;
      e.components.transform.position.y = Math.random() * window.innerHeight;
      e.components.transform.rotation.x = Math.random() * 6.28;
      this.world.addEntity(e);
    }
  }
}