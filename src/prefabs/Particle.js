import { Entity } from './../core/Entity.js';
import { AlphaOverLife } from './../components/AlphaOverLife.js';
import { Color } from './../components/Color.js';
import { Transform } from './../components/Transform.js';
import { PhysicsBody } from './../components/PhysicsBody.js';
import { Life } from './../components/Life.js';
import { Sprite } from './../components/Sprite.js';
import { ScaleOverLife } from './../components/ScaleOverLife.js';

export class Particle extends Entity {
  constructor() {
    super();
    this.active = false;
    this.addComponent(new Color());
    this.addComponent(new Transform());
    this.addComponent(new PhysicsBody());
    this.addComponent(new Life());
    this.addComponent(new Sprite());
    this.addComponent(new AlphaOverLife());
    this.addComponent(new ScaleOverLife());
  }
}