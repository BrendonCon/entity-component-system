import System from '../core/System.js';

export default class Euler extends System {
  update(deltaTime, time) {
    let entities = this.world.getEntitiesByComponents(['transform', 'physicsBody']);

    entities.forEach(entity => {
      let { transform, physicsBody } = entity.components;

      transform.rotation.x += physicsBody.angularVelocity.x;
      physicsBody.velocity.x += physicsBody.acceleration.x;
      physicsBody.velocity.y += physicsBody.acceleration.y;
      transform.position.x += physicsBody.velocity.x;
      transform.position.y += physicsBody.velocity.y;
    });
  }
}