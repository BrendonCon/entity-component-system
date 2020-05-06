import { System } from '../core/System.js';
import { Transform } from './../components/Transform.js';
import { Color } from './../components/Color.js';
import { Sprite } from './../components/Sprite.js';

export class CanvasRenderSystem extends System {
  constructor(canvas) {
    super();
    this.components = [Transform, Color, Sprite];
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
      let w = sprite.image.width * transform.scale.x;
      let h = sprite.image.height * transform.scale.y;

      this._bufferCtx.save();
      this._bufferCtx.globalAlpha = Math.max(color.alpha, 0);
      this._bufferCtx.translate(position.x, position.y);
      this._bufferCtx.scale(scale.x, scale.y);
      this._bufferCtx.rotate(transform.rotation.x);
      
      this._bufferCtx.drawImage(sprite.image, - w * 0.5, - h * 0.5, w, h);
      this._bufferCtx.restore();
    });

    this._ctx.drawImage(this._buffer, 0, 0, this.width, this.height);
  }

  destroy() {
    window.removeEventListener('resize', () => this.setDimensions());
  }
}