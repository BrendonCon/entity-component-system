import { System } from '../core/System.js';

export class CanvasRenderSystem extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.buffer = document.createElement('canvas');
    this.bufferCtx = this.buffer.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.components = ['transform', 'color', 'sprite'];
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
    this.bufferCtx.fillRect(0, 0, this.width, this.height);

    this.entities.forEach(particle => {
      let { transform, color, sprite } = particle.components;
      let position = transform.position;
      let scale = transform.scale;
      
      if (sprite.src && sprite.texture.complete) {
        let w = sprite.texture.width;
        let h = sprite.texture.height;
        
        this.bufferCtx.save();
        this.bufferCtx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.alpha})`;
        this.bufferCtx.globalAlpha = Math.max(color.alpha, 0);
        this.bufferCtx.translate(position.x, position.y);
        this.bufferCtx.scale(scale.x, scale.y);
        this.bufferCtx.rotate(transform.rotation.x);
        this.bufferCtx.drawImage(sprite.texture, - w * 0.5, - h * 0.5, w, h);
        this.bufferCtx.restore();
      } else {
        this.bufferCtx.fillRect(position.x, position.y, 20, 20);
      }
    });

    this.ctx.drawImage(this.buffer, 0, 0, this.width, this.height);
  }

  destroy() {
    window.removeEventListener('resize', () => this.setDimensions());
  }
}