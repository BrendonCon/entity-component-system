import System from '../core/System.js';
import Mouse from '../components/Mouse.js';
import Transform from '../components/Transform.js';

export default class MouseSystem extends System {
  constructor() {
    super();
    this.components = [Mouse, Transform];
  }

  init() {
    window.addEventListener('mousemove', (event) => this.setMouseCoords(event));
  }

  setMouseCoords(event) {
    this.entities.forEach(entity => {
      const { mouse, transform } = entity.components;
      const { clientX, clientY } = event;
      mouse.x = clientX;
      mouse.y = clientY;
      transform.position.x = clientX;
      transform.position.y = clientY;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', (e) => this.setMouseCoords(e));
  }
}
