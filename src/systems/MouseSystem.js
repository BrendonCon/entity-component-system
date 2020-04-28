import { System } from '../core/System.js';

export class MouseSystem extends System {
  constructor() {
    super();
    this.components = ['mouse', 'transform'];
  }
  init() {
    window.addEventListener('mousemove', (e) => this.setMouseCoords(e));
  }

  setMouseCoords(e) {
    this.entities.forEach(emitter => {
      let { mouse, transform } = emitter.components;
      mouse.x = transform.position.x = e.clientX;
      mouse.y = transform.position.y = e.clientY;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', (e) => this.setMouseCoords(e));
  }
}