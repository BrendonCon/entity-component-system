import { System } from '../core/System.js';
import { Transform } from './../components/Transform.js';
import { Color } from './../components/Color.js';

export class CanvasRenderSystem extends System {
  components = [Transform, Color];

  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.opts = { alpha: false, depth: false, antialias: false, stencil: false, desynchronized: false };
    this.ctx = this.canvas.getContext('2d', this.opts);
    this.buffer = document.createElement('canvas');
    this.bufferCtx = this.buffer.getContext('2d', this.opts);
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
    this.bufferCtx.fillRect(0, 0, this.width, this.height);

    this.entities.forEach(particle => {
      let { transform, color, sprite } = particle.components;
      let position = transform.position;
      let scale = transform.scale;
      
      this.bufferCtx.save();
      this.bufferCtx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      this.bufferCtx.globalAlpha = Math.max(color.alpha, 0);
      this.bufferCtx.translate(position.x, position.y);
      this.bufferCtx.scale(scale.x, scale.y);
      this.bufferCtx.rotate(transform.rotation.x);

      if (sprite && sprite.src && sprite.image.complete) {
        let w = sprite.texture.width;
        let h = sprite.texture.height;
        this.bufferCtx.drawImage(sprite.texture, - w * 0.5, - h * 0.5, w, h);
      } else {
        this.bufferCtx.fillRect(-10, -10, 20, 20);
      }
      
      this.bufferCtx.restore();
    });

    this.ctx.drawImage(this.buffer, 0, 0, this.width, this.height);
  }

  destroy() {
    window.removeEventListener('resize', () => this.setDimensions());
  }
}