import Component from '../core/Component.js';

export default class Color extends Component {
  constructor(opts = {}) {
    super();
    this.r = opts.r || 255;
    this.g = opts.g || 255;
    this.b = opts.b || 255;
    this.a = opts.a || 1;
  }
}
