import Component from '../core/Component.js';

export default class Rectangle extends Component {
  constructor(width, height = width) {
    super();
    this.width = width;
    this.height = height;
  }
}
