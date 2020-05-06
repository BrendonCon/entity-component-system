import { Component } from './../core/Component.js';

export class Life extends Component {
  constructor() {
    super();
    this.currentLife = 3000;
    this.maxLife = 3000;
    this.multiplier = 2;
  }
}