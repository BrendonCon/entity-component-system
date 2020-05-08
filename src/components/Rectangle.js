import Component from '../core/Component.js';

export default class Rectangle extends Component {
  constructor(width = 20, height = width) {
    super();
    this.width = width;
    this.height = height;
  }
}
