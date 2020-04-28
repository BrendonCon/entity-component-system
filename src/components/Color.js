import { Component } from './../core/Component.js';

export class Color extends Component {
  constructor(r = 255, g = r, b = r, a = 0) {
    super();
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = a;
  }
}