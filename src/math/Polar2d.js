export class Polar2D {
  constructor(radius = 0, theta = 0) {
    this.radius = radius;
    this.theta = theta;
  }

  get x() {
    return Math.cos(this.theta) * this.radius;
  }

  get y() {
    return Math.sin(this.theta) * this.radius;
  }

  set(radius, theta) {
    this.radius = radius;
    this.theta = theta;
  }

  setAngle(theta) {
    this.theta = theta;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  normalize() {
    this.radius = 1;
  }

  fromVector(v) {
    this.radius = Math.hypot(v.x, v.y);
    this.theta = Math.atan2(v.y, v.x);
  }

  toVector() {
    return {
      x: this.x,
      y: this.y
    };
  }

  zero() {
    this.radius = 0;
    this.theta = 0;
  }

  isEqual(p) {
    return p.radius === this.radius && p.theta === this.theta;
  }

  copy() {
    return new Polar2D(this.radius, this.theta);
  }

  toArray() {
    return [this.radius, this.theta];
  }
}