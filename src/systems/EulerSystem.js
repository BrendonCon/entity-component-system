import { System } from '../core/System.js';

export class EulerSystem extends System {
  constructor() {
    super();
    this.components = ['transform', 'physicsBody'];
  }

  update(deltaTime, time) {
    this.entities.forEach(entity => {
      let { transform, physicsBody } = entity.components;

      transform.rotation.x += physicsBody.angularVelocity.x;
      physicsBody.velocity.x += physicsBody.acceleration.x;
      physicsBody.velocity.y += physicsBody.acceleration.y;
      transform.position.x += physicsBody.velocity.x;
      transform.position.y += physicsBody.velocity.y;
    });
  }
}