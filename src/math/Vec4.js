export class Vec4 {
  constructor(x = 0, y = x, z = x, w = x) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;   
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    this.w *= s;
  }

  div(d) {
    this.x /= d;
    this.y /= d;
    this.z /= d; 
    this.w /= d;  
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }

  length() {
    return Math.hypot(this.x, this.y, this.z, this.w);
  }
}