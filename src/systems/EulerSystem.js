import System from '../core/System.js';

export default 
class Euler extends System {
  update(deltaTime, time) {
    this.engine.entities.forEach(entity => {
      let { transform, physicsBody } = entity.components;

      physicsBody.velocity.x += physicsBody.acceleration.x;
      physicsBody.velocity.y += physicsBody.acceleration.y;
      transform.position.x += physicsBody.velocity.x;
      transform.position.y += physicsBody.velocity.y;
    });
  }
}