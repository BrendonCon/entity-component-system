import { System } from '../core/System.js';

export class MouseSystem extends System {
  components = ['mouse', 'transform'];

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