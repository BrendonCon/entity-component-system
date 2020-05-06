import { Component } from './../core/Component.js';

export class Sprite extends Component {
  constructor() {
    super();
    this.src = '';
    this.image = new Image();
    this.image.src = this.src; // this will make an instance per every sprite, we must look up in the texture system
  }
}