import { System } from '../core/System.js';
import { Transform } from '../components/Transform.js';
import { PhysicsBody } from '../components/PhysicsBody.js';

export class EulerSystem extends System {
  components = [Transform, PhysicsBody];

  update(deltaTime, time) {
    this.entities.forEach(entity => {
      let { transform, physicsBody } = entity.components;

      transform.rotation.x += physicsBody.angularVelocity.x;

      physicsBody.velocity.x += physicsBody.acceleration.x;
      physicsBody.velocity.y += physicsBody.acceleration.y;

      physicsBody.velocity.x *= physicsBody.friction.x;
      physicsBody.velocity.y *= physicsBody.friction.y;

      transform.position.x += physicsBody.velocity.x;
      transform.position.y += physicsBody.velocity.y;

      physicsBody.acceleration.x = 0;
      physicsBody.acceleration.y = 0;
    });
  }
}