import { System } from '../core/System.js';
import { Mouse } from '../components/Mouse.js';
import { Transform } from '../components/Transform.js';

export class MouseSystem extends System {
  components = [Mouse, Transform];

  init() {
    window.addEventListener('mousemove', (e) => this.setMouseCoords(e));
  }

  setMouseCoords(e) {
    this.entities.forEach(entity => {
      let { mouse, transform } = entity.components;
      mouse.x = transform.position.x = e.clientX;
      mouse.y = transform.position.y = e.clientY;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', (e) => this.setMouseCoords(e));
  }
}