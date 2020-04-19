import Component from './../core/Component.js';
import Vec3 from './../math/Vec3.js';

export default class Transform extends Component {
  constructor() {
    super();
    this.position = new Vec3();
    this.scale = new Vec3(1);
    this.rotation = new Vec3();
  }
}