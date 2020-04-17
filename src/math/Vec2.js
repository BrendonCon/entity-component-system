export default class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;   
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
  }

  div(d) {
    this.x /= d;
    this.y /= d; 
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  length() {
    return Math.hypot(this.x, this.y);
  }
}