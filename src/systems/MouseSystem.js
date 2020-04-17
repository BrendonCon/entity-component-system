import System from '../core/System.js';

export default
class MouseSystem extends System {
  init() {
    window.addEventListener('mousemove', (e) => this.setMouseCoords(e));
  }

  setMouseCoords(e) {
    this.engine.emitters.forEach(emitter => {
      let { mouse, transform } = emitter.components;
      mouse.x = transform.position.x = e.clientX;
      mouse.y = transform.position.y = e.clientY;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', (e) => this.setMouseCoords(e));
  }
}