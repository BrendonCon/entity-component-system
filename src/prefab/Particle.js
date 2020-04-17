import Entity from './../core/Entity.js';
import Transform from './../components/Transform.js';
import PhysicsBody from './../components/PhysicsBody.js';

export default
class Particle extends Entity {
  constructor() {
    super();
    this.active = false;
    this.addComponent(new Transform());
    this.addComponent(new PhysicsBody());
  }
}