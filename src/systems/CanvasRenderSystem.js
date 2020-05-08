import System from '../core/System.js';
import Transform from '../components/Transform.js';
import Color from '../components/Color.js';

export default class CanvasRenderSystem extends System {
  constructor(canvas) {
    super();
    this._opts = {
      alpha: false,
      depth: false,
      antialias: false,
      stencil: true
    };
    this.components = [Transform, Color];
    this._canvas = canvas;
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
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this._buffer.width = this.width;
    this._buffer.height = this.height;
    this._canvas.width = this.width;
    this._canvas.height = this.height;
  }

  update() {
    this._bufferCtx.fillRect(0, 0, this.width, this.height);

    this.entities.forEach(entity => {
      const { transform, color, sprite } = entity.components;
      const { scale, position } = transform;

      this._bufferCtx.save();
      this._bufferCtx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      this._bufferCtx.globalAlpha = Math.max(color.alpha, 0);
      this._bufferCtx.translate(position.x, position.y);
      this._bufferCtx.scale(scale.x, scale.y);
      this._bufferCtx.rotate(transform.rotation.x);

      if (sprite && sprite.src && sprite.image.complete) {
        const { width, height } = sprite.texture;
        this._bufferCtx.drawImage(sprite.texture, -width * 0.5, -height * 0.5, width, height);
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
