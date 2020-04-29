import { Component } from './../core/Component.js';
import { Vec3 } from './../math/Vec3.js';

export class Transform extends Component {
  position = new Vec3();
  scale = new Vec3(1);
  rotation = new Vec3();
}