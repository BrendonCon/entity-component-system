import System from '../core/System.js';
import Transform from '../components/Transform.js';
import PhysicsBody from '../components/PhysicsBody.js';

export default class EulerSystem extends System {
  constructor() {
    super();
    this.components = [Transform, PhysicsBody];
  }

  update() {
    this.entities.forEach(entity => {
      const { transform, physicsBody } = entity.components;

      transform.rotation.x += physicsBody.angularVelocity.x;
      transform.rotation.y += physicsBody.angularVelocity.y;
      transform.rotation.z += physicsBody.angularVelocity.z;

      physicsBody.velocity.x += physicsBody.acceleration.x;
      physicsBody.velocity.y += physicsBody.acceleration.y;
      physicsBody.velocity.z += physicsBody.acceleration.z;

      physicsBody.velocity.x *= physicsBody.friction.x;
      physicsBody.velocity.y *= physicsBody.friction.y;
      physicsBody.velocity.z *= physicsBody.friction.z;

      transform.position.x += physicsBody.velocity.x;
      transform.position.y += physicsBody.velocity.y;
      transform.position.z += physicsBody.velocity.z;

      physicsBody.acceleration.x = 0;
      physicsBody.acceleration.y = 0;
      physicsBody.acceleration.z = 0;
    });
  }
}
