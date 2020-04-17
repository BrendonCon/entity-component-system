import Entity from './../core/Entity.js';
import Color from './../components/Color.js';
import Transform from './../components/Transform.js';
import PhysicsBody from './../components/PhysicsBody.js';
import Life from './../components/Life.js';
import Sprite from './../components/Sprite.js';

export default class Particle extends Entity {
  constructor() {
    super();
    this.active = false;
    this.addComponent(new Color());
    this.addComponent(new Transform());
    this.addComponent(new PhysicsBody());
    this.addComponent(new Life());
    this.addComponent(new Sprite());
  }
}