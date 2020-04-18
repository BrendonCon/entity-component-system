import System from '../core/System.js';

export default class MouseSystem extends System {
  init() {
    window.addEventListener('mousemove', (e) => this.setMouseCoords(e));
  }

  setMouseCoords(e) {
    let entities = this.world.getEntitiesByComponents(['mouse', 'transform']);
    
    entities.forEach(emitter => {
      let { mouse, transform } = emitter.components;
      mouse.x = transform.position.x = e.clientX;
      mouse.y = transform.position.y = e.clientY;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', (e) => this.setMouseCoords(e));
  }
}