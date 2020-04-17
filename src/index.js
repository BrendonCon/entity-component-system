import Engine from './core/Engine.js';
import Emitter from './prefabs/Emitter.js';

import AlphaOverLife from './components/AlphaOverLife.js';
import Transform from './components/Transform.js';
import Sprite from './components/Sprite.js';
import PhysicsBody from './components/PhysicsBody.js';
import Emission from './components/Emission.js';
import Mouse from './components/Mouse.js';

import AlphaOverLifeSystem from './systems/AlphaOverLifeSystem.js';
import EulerSystem from './systems/EulerSystem.js';
import EmissionSystem from './systems/EmissionSystem.js';
import CanvasRenderSystem from './systems/CanvasRenderSystem.js';
import MouseSystem from './systems/MouseSystem.js';
import LifeSystem from './systems/LifeSystem.js';
import SpriteSystem from './systems/SpriteSystem.js';

let canvas = document.getElementById('canvas');
let engine = new Engine();

window.engine = engine;

function setup() {
  let emitter = new Emitter();
  emitter.addComponent(new Sprite('./assets/star_04.png'));
  emitter.components.transform.position.x = window.innerWidth * 0.25;
  emitter.components.transform.position.y = window.innerHeight * 0.5;
  emitter.addComponent(new Mouse());
  engine.addEmitter(emitter);

  let count = 4;

  for (let i = 0; i < count; i++) {
    let emitter = new Emitter();
    emitter.addComponent(new Sprite('./assets/radial.png'));
    emitter.components.transform.position.x = Math.random() * window.innerWidth;
    emitter.components.transform.position.y = Math.random() * window.innerHeight;
    engine.addEmitter(emitter);
  }

  engine.addSystem(new EulerSystem());
  engine.addSystem(new CanvasRenderSystem(canvas));
  engine.addSystem(new EmissionSystem());
  engine.addSystem(new LifeSystem());
  engine.addSystem(new MouseSystem());
  engine.addSystem(new AlphaOverLifeSystem());
  engine.addSystem(new SpriteSystem());

  window.what = () => {
      engine.emitters.forEach(emitter => {
      console.table(emitter.components.emission)
    });
  }
}

let prevTime = 0;  
let currentTime = 0;
let deltaTime = 0;

function update(time) {
  prevTime = currentTime;
  currentTime = time;
  deltaTime = currentTime - prevTime;
  engine.update(deltaTime, time);
}

function render() {
  // TODO: Separate update and render cycles
}

function loop(time = 0) {
  update(time);
  render();
  requestAnimationFrame(loop);
}

(function main() {
  setup();
  loop();
})();