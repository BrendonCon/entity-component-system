import System from '../core/System.js';

export default
class Canvas extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.buffer = document.createElement('canvas');
    this.bufferCtx = this.buffer.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  init() {
    this.setDimensions();
    window.addEventListener('resize', () => this.setDimensions());
  }

  setDimensions() {
    this.buffer.width = this.canvas.width = this.width = window.innerWidth;
    this.buffer.height = this.canvas.height = this.height = window.innerHeight;
  }

  update() {
    this.bufferCtx.fillStyle = '#000000';
    this.bufferCtx.fillRect(0, 0, this.width, this.height);

    this.bufferCtx.fillStyle = '#ffffff';

    this.engine.entities
      .filter(particle => particle.active)
      .forEach(particle => {
        let { transform } = particle.components;
        this.bufferCtx.fillRect(transform.position.x, transform.position.y, 20, 20);
      });

    this.ctx.drawImage(this.buffer, 0, 0, this.width, this.height);
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
  }
}