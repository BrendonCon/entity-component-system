import System from '../core/System.js';
import Particle from '../prefabs/Particle.js';
import Emission from '../components/Emission.js';
import Sprite from '../components/Sprite.js';

export default class EmissionSystem extends System {
  constructor() {
    super();
    this.components = [Emission, Sprite];
  }

  init() {
    this.entities.forEach(emitter => {
      const { emission } = emitter.components;
      const emitterTransform = emitter.components.transform;
      const emitterSprite = emitter.components.sprite;

      emission.startIndex = this.world.getEntityCount();

      for (let i = 0; i < emission.particleCount; i++) {
        const particle = new Particle();
        const particleComponents = particle.components;
        const particleTransform = particleComponents.transform;
        const particlePhysicsBody = particleComponents.physicsBody;
        const particleLife = particleComponents.life;
        const particleSprite = particleComponents.sprite;

        particle.active = false;
        particleSprite.src = emitterSprite.src;
        particleSprite.texture = emitterSprite.texture;
        particleLife.currentLife = Math.random() * 5000;
        particleLife.maxLife = particleLife.currentLife;

        const theta = 6.28 * Math.random();
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
      const { emission } = emitter.components;

      emission.elapsed += deltaTime * emission.speed;

      if (emission.elapsed >= emission.rate) {
        const emitterTransform = emitter.components.transform;
        const entities = this.world.getAllEntities();

        const { startIndex, endIndex } = emission;
        const index = startIndex + (emission.index++ % (endIndex - startIndex));
        const particle = entities[index];
        const { transform, life } = particle.components;

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
