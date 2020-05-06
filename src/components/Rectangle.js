import { Component } from './../core/Component.js';

export class Rectangle extends Component {
  constructor(width = 20, height = width) {
    super();
    this.width = width;
    this.height = height;
  }
}