import Component from '../core/Component.js';

export default class Sprite extends Component {
  constructor() {
    super();
    this.src = '';
    this.image = new Image();
  }
}
