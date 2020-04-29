import { Component } from './../core/Component.js';
import { Vec3 } from './../math/Vec3.js';

export class PhysicsBody extends Component {
  mass = 1;
  velocity = new Vec3();
  acceleration = new Vec3(Math.random() - 0.5, Math.random() - 0.5);
  angularVelocity = new Vec3();
  angularAcceleration = new Vec3();
  friction = new Vec3(0.985);
}