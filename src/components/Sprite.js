import { Component } from './../core/Component.js';

export class Sprite extends Component {
  constructor(src) {
    super();
    this.src = src;
    this.texture = new Image();
  }
}