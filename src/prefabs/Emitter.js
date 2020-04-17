import Entity from '../core/Entity.js';
import Transform from '../components/Transform.js';
import Emission from '../components/Emission.js';
import PhysicsBody from '../components/PhysicsBody.js';

export default class Emitter extends Entity {
  constructor() {
    super();
    this.addComponent(new Emission());
    this.addComponent(new Transform());
    this.addComponent(new PhysicsBody());
  }
}