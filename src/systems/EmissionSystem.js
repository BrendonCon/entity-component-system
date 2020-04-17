import System from './../core/System.js';
import Particle from './../prefab/Particle.js';

/*
  Emitters are our entities
  They will create particle entities
  Have reference to the particles array and can remove/add at whim

  PROBLEM: Hows does update get access to components list of emitter?
*/

export default
class EmitterSystem extends System {
  init() {
   this.engine.emitters.forEach((emitter, i) => {
      let emission = emitter.components.emission;
      let emitterTransform = emitter.components.transform;
      let emitterVelocity = emitter.components.physicsBody.velocity;

      for (let i = 0; i < emission.particleCount; i++) {
        let particle = new Particle();
        let { transform, physicsBody } = particle.components;       

        physicsBody.velocity.x = emitterVelocity.x;
        physicsBody.velocity.y = emitterVelocity.y;
        transform.position.x = emitterTransform.position.x;
        transform.position.y = emitterTransform.position.y;
        
        this.engine.entities.push(particle);
      }
   });
  }

  update(deltaTime, time) {
    let duration = Infinity;

    if (time < duration) {
      let entities = this.engine.entities;
      let rate = 150;
      let index = (time / rate) % (entities.length) | 0;
  
      let particle = this.engine.entities[index];
      let { transform } = particle.components;
      particle.active = true;

      // needs to acccess emitter components somehow
      transform.position.x = window.innerWidth * 0.5;
      transform.position.y = window.innerHeight * 0.5;
    }
  }
}