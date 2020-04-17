import Component from '../core/Component.js';

export default
class Emission extends Component {
  constructor() {
    super();
    this.particleCount = 3;
    this.emitAmount = 1;
    this.rate = 1000;
  }
}