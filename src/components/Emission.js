import Component from '../core/Component.js';

export default class Emission extends Component {
  constructor() {
    super();
    this.particleCount = 50;
    this.emitAmount = 1;
    this.rate = 50;
    this.duration = Infinity;
    this.elapsed = this.rate;
    this.index = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    this.speed = 1;
  }
}