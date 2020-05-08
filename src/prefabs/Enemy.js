import Entity from '../core/Entity.js';
import Color from '../components/Color.js';
import Transform from '../components/Transform.js';
import PhysicsBody from '../components/PhysicsBody.js';

export default class Enemy extends Entity {
  constructor() {
    super();
    this.addComponent(new Color());
    this.addComponent(new Transform());
    this.addComponent(new PhysicsBody());
  }
}
