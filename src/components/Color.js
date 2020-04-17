import Component from './../core/Component.js';

export default class Color extends Component {
  constructor() {
    super();
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.alpha = 1;
  }
}