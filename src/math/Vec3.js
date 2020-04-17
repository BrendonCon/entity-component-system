export default
class Vec3 {
  constructor(x = 0, y = x, z = x) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;   
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }

  div(d) {
    this.x /= d;
    this.y /= d;
    this.z /= d;   
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  length() {
    return Math.hypot(this.x, this.y, this.z);
  }
}