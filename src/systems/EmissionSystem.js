import { System } from './../core/System.js';
import { Particle } from './../prefabs/Particle.js';

export class EmissionSystem extends System {
  components = ['emission', 'sprite'];

  init() {
    this.entities.forEach(emitter => {
      let emission = emitter.components.emission;
      let emitterTransform = emitter.components.transform;
      let emitterSprite = emitter.components.sprite;

      emission.startIndex = this.world.getEntityCount();

      for (let i = 0; i < emission.particleCount; i++) {
        let particle = new Particle();
        let particleComponents = particle.components;
        let particleTransform = particleComponents.transform;    
        let particlePhysicsBody = particleComponents.physicsBody;
        let particleLife = particleComponents.life;
        let particleSprite = particleComponents.sprite;

        particleSprite.src = emitterSprite.src;
        particleSprite.texture = emitterSprite.texture;
  
        particleLife.currentLife = Math.random() * 5000;
        particleLife.maxLife = particleLife.currentLife;

        let theta = 6.28 * Math.random();
        particlePhysicsBody.velocity.x = Math.cos(theta);
        particlePhysicsBody.velocity.y = Math.sin(theta);

        particleTransform.position.x = emitterTransform.position.x;
        particleTransform.position.y = emitterTransform.position.y;
        
        this.world.addEntity(particle);
      }

      emission.endIndex = this.world.getEntityCount();
    });
  }

  update(deltaTime) {
    this.entities.forEach(emitter => {
      let { emission } = emitter.components;

      emission.elapsed += deltaTime * emission.speed;

      if (emission.elapsed >= emission.rate) {
        let emitterTransform = emitter.components.transform;
        let entities = this.world.getAllEntities();
        let startIndex = emission.startIndex;
        let endIndex = emission.endIndex;

        let index = startIndex + (emission.index++ % (endIndex - startIndex));
        let particle = entities[index];
        let { transform, life } = particle.components;
        
        life.currentLife = life.maxLife;
        particle.active = true;

        particle.components.physicsBody.acceleration.x = (Math.random() - 0.5) * 10;
        particle.components.physicsBody.acceleration.y = (Math.random() - 0.5) * 10;

        transform.position.x = emitterTransform.position.x;
        transform.position.y = emitterTransform.position.y;

        emission.elapsed = 0;
      }
    });
  }
}