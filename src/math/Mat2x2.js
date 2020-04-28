export class Mat2x2 {
  constructor(mat = [0, 0, 0, 0]) {
    this.mat = mat;
  }

  set(chi1, psi1, chi2, psi2) {
    this.mat[0] = chi1;
    this.mat[1] = psi1;
    this.mat[2] = chi2;
    this.mat[3] = psi2;
  }

  add(A) {
    this.mat[0] += A[0];
    this.mat[1] += A[1];
    this.mat[2] += A[2];
    this.mat[3] += A[3];
  }
  
  sub(A) {
    this.mat[0] -= A[0];
    this.mat[1] -= A[1];
    this.mat[2] -= A[2];
    this.mat[3] -= A[3];
  }

  scale(scalar) {
    this.mat[0] *= scalar;
    this.mat[1] *= scalar;
    this.mat[2] *= scalar;
    this.mat[3] *= scalar;
  }

  rotate(theta) {
    let c = Math.cos(theta);
    let s = Math.sin(theta);

    this.mat[0] *= c;
    this.mat[1] *= s;
    this.mat[2] *= -s;
    this.mat[3] *= c;
  }

  inverse() {
    let det = this.det();
    
    if (det) {
      let alpha = 1.0 / det;
      let a = this.mat[0];
      let d = this.mat[3];

      this.mat[0] = alpha * d;
      this.mat[1] *= -alpha;
      this.mat[2] *= -alpha;
      this.mat[3] = alpha * a;     
    } else {
      this.zero();
    }
  }

  multiplyMatrix(A) {
    let chi1 = this.mat[0] * A[0] + this.mat[1] * A[2];
    let psi1 = this.mat[0] * A[1] + this.mat[1] * A[3];
    let chi2 = this.mat[2] * A[0] + this.mat[3] * A[2];
    let psi2 = this.mat[2] * A[1] + this.mat[3] * A[3];

    this.mat[0] = chi1;
    this.mat[1] = psi1;
    this.mat[2] = chi2;
    this.mat[3] = psi2;
  }

  transpose() {
    let b = this.mat[2];
    let c = this.mat[3];

    this.mat[1] = c;
    this.mat[2] = b;
  }

  identity() {
    this.mat[0] = this.mat[3] = 1;
    this.mat[1] = this.mat[2] = 0;
  }

  zero() {
    this.mat[0] = this.mat[1] = this.mat[2] = this.mat[3] = 0;
  }

  det() {
    return this.mat[0] * this.mat[3] - this.mat[1] * this.mat[2];
  }
  
  equal(A) {
    return this.mat[0] === A[0] && 
      this.mat[1] === A[1] && 
      this.mat[2] === A[2] &&
      this.mat[3] === A[3];
  }

  toString() {
    return this.mat.toString();
  }

  copy() {
    return new Mat2x2([...this.mat]);
  }

  static identity() {
    return new Mat2x2([1, 0, 0, 1]);
  }

  static zero() {
    return new Mat2x2([0, 0, 0, 0]);
  }

  static add(A, B) {
    return new Mat2x2([
      A[0] + B[0],
      A[1] + B[1],
      A[2] + B[2],
      A[3] + B[3]
    ]);
  }

  static sub(A, B) {
    return new Mat2x2([
      A[0] - B[0],
      A[1] - B[1],
      A[2] - B[2],
      A[3] - B[3]
    ]);
  }

  static scale(A, scalar) {
    return new Mat2x2([
      A[0] * scalar,
      A[1] * scalar,
      A[2] * scalar,
      A[3] * scalar
    ]);
  }

  static det(A) {
    return A[0] * A[3] - A[1] * A[2];
  }

  static transpose(A) {
    return new Mat2x2([A[0], A[2], A[1], A[3]]);
  }

  static inverse(A) {
    let det = Mat2x2.det(A);
    
    if (det) {
      let alpha = 1.0 / det;

      return new Mat2x2([
        alpha * A[3],
        alpha * -A[1],
        alpha * -A[2],
        alpha * A[0]
      ]);
    } else {
      return Mat2x2.zero();
    }
  }

  static rotate(A, theta) {
    return new Mat2x2([
      A[0] * Math.cos(theta),
      A[1] * Math.sin(theta),
      A[2] * -Math.sin(theta),
      A[3] * Math.cos(theta)
    ]);
  }

  static multiplyMatrix(A, B) {
    return new Mat2x2([
      A[0] * B[0] + A[1] * B[2],
      A[0] * B[1] + A[1] * B[3],
      A[2] * B[0] + A[3] * B[2],
      A[2] * B[1] + A[3] * B[3],
    ]);
  }

  static equal(A, B) {
    return A[0] === B[0] && 
      A[1] === B[1] && 
      A[2] === B[2] &&
      A[3] === B[3];
  }
}