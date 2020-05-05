import { System } from '../core/System.js';
import { Transform } from './../components/Transform.js';
import { Color } from './../components/Color.js';

export class CanvasRenderSystem extends System {
  components = [Transform, Color];

  constructor(canvas) {
    super();
    this._canvas = canvas;
    this._opts = { alpha: false, depth: false, antialias: false, stencil: true };
    this._ctx = this._canvas.getContext('2d', this._opts);
    this._buffer = document.createElement('canvas');
    this._bufferCtx = this._buffer.getContext('2d', this._opts);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  init() {
    this.setDimensions();
    window.addEventListener('resize', () => this.setDimensions());
  }

  setDimensions() {
    this._buffer.width = this._canvas.width = this.width = window.innerWidth;
    this._buffer.height = this._canvas.height = this.height = window.innerHeight;
  }

  update() {
    this._bufferCtx.fillRect(0, 0, this.width, this.height);

    this.entities.forEach(entity => {
      let { transform, color, sprite } = entity.components;
      let position = transform.position;
      let scale = transform.scale;
      
      this._bufferCtx.save();
      this._bufferCtx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      this._bufferCtx.globalAlpha = Math.max(color.alpha, 0);
      this._bufferCtx.translate(position.x, position.y);
      this._bufferCtx.scale(scale.x, scale.y);
      this._bufferCtx.rotate(transform.rotation.x);

      if (sprite && sprite.src && sprite.image.complete) {
        let w = sprite.texture.width;
        let h = sprite.texture.height;
        this._bufferCtx.drawImage(sprite.texture, - w * 0.5, - h * 0.5, w, h);
      } else {
        this._bufferCtx.fillRect(-10, -10, 20, 20);
      }
      
      this._bufferCtx.restore();
    });

    this._ctx.drawImage(this._buffer, 0, 0, this.width, this.height);
  }

  destroy() {
    window.removeEventListener('resize', () => this.setDimensions());
  }
}