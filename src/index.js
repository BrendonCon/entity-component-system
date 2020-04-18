import World from './core/World.js';
import Entity from './core/Entity.js';

import AlphaOverLife from './components/AlphaOverLife.js';
import Transform from './components/Transform.js';
import Sprite from './components/Sprite.js';
import PhysicsBody from './components/PhysicsBody.js';
import Emission from './components/Emission.js';
import Mouse from './components/Mouse.js';
import Emitter from './components/Emitter.js';

import AlphaOverLifeSystem from './systems/AlphaOverLifeSystem.js';
import EulerSystem from './systems/EulerSystem.js';
import EmissionSystem from './systems/EmissionSystem.js';
import CanvasRenderSystem from './systems/CanvasRenderSystem.js';
import MouseSystem from './systems/MouseSystem.js';
import LifeSystem from './systems/LifeSystem.js';
import SpriteSystem from './systems/SpriteSystem.js';

// import Emitter from './prefabs/Emitter.js';
import Particle from './prefabs/Particle.js';

let canvas = document.getElementById('canvas');
let engine = new World();

function setup() {
  let emitter = new Entity();
  emitter.addComponent(new Sprite('./assets/star_04.png'));
  emitter.addComponent(new Transform());
  emitter.addComponent(new Emission());
  emitter.addComponent(new Emitter());
  emitter.components.transform.position.x = window.innerWidth * 0.25;
  emitter.components.transform.position.y = window.innerHeight * 0.5;
  emitter.addComponent(new Mouse());
  engine.addEntity(emitter);

  let count = 4;

  for (let i = 0; i < count; i++) {
    let emitter = new Entity();
    emitter.addComponent(new Sprite('./assets/radial.png'));
    emitter.addComponent(new Transform());
    emitter.addComponent(new Emission());
    emitter.addComponent(new Emitter());
    emitter.components.transform.position.x = Math.random() * window.innerWidth;
    emitter.components.transform.position.y = Math.random() * window.innerHeight;
    engine.addEntity(emitter);
  }

  engine.addSystem(new EulerSystem());
  engine.addSystem(new CanvasRenderSystem(canvas));
  engine.addSystem(new EmissionSystem());
  engine.addSystem(new LifeSystem());
  engine.addSystem(new MouseSystem());
  engine.addSystem(new AlphaOverLifeSystem());
  engine.addSystem(new SpriteSystem());
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