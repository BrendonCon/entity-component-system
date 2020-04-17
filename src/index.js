import Particle from './prefab/Particle.js';
import Entity from './core/Entity.js';
import Engine from './core/Engine.js';

import Transform from './components/Transform.js';
import Sprite from './components/Sprite.js';
import PhysicsBody from './components/PhysicsBody.js';
import Emission from './components/Emission.js';
import Mouse from './components/Mouse.js';

import EulerSystem from './systems/EulerSystem.js';
import EmissionSystem from './systems/EmissionSystem.js';
import CanvasRenderSystem from './systems/CanvasRenderSystem.js';
import MouseSystem from './systems/MouseSystem.js';

let canvas = document.getElementById('canvas');
let engine = new Engine();
let emitter = new Entity();

function setup() {
  engine.addEmitter(emitter);
  emitter.addComponent(new Emission());
  emitter.addComponent(new Transform());

  let p = new PhysicsBody();
  p.velocity.x = 10;
  emitter.addComponent(p);

  engine.addSystem(new EulerSystem());
  engine.addSystem(new CanvasRenderSystem(canvas));
  engine.addSystem(new EmissionSystem());
}

function update(time) {
  emitter.components.transform.position.x = Math.sin(time) * 10.0;
  engine.update(1, time);
}

function render() {}

function loop(time = 0) {
  update(time);
  render();
  requestAnimationFrame(loop);
}

(function main() {
  setup();
  loop();
})();