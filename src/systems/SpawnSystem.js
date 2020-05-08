import System from '../core/System.js';
import Enemy from '../prefabs/Enemy.js';

export default class SpawnSystem extends System {
  constructor() {
    super();
    this.spawnTime = 2;
    this.delta = this.spawnTime;
    this.active = false;
  }

  update(deltaTime) {
    this.delta += deltaTime;

    if (this.delta >= this.spawnTime) {
      this.delta = 0;
      const enemy = new Enemy();
      enemy.components.transform.position.x = Math.random() * window.innerWidth;
      enemy.components.transform.position.y = Math.random() * window.innerHeight;
      enemy.components.transform.rotation.x = Math.random() * 6.28;
      this.world.addEntity(enemy);
    }
  }
}
