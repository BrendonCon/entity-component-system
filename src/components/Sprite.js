import { Component } from './../core/Component.js';

export class Sprite extends Component {
  constructor() {
    super();
    this.src = '';
    this.image = new Image();
  }
}