import { Component } from './../core/Component.js';
import { Vec3 } from './../math/Vec3.js';

export class PhysicsBody extends Component {
  constructor() {
    super();
    this.mass = 1;
    this.velocity = new Vec3();
    this.acceleration = new Vec3();
    this.angularVelocity = new Vec3();
    this.angularAcceleration = new Vec3();
    this.friction = new Vec3(0.985);
  }
}