import { World } from './core/World.js';

import { AlphaOverLife } from './components/AlphaOverLife.js';
import { Transform } from './components/Transform.js';
import { Sprite } from './components/Sprite.js';
import { PhysicsBody } from './components/PhysicsBody.js';
import { Emission } from './components/Emission.js';
import { Mouse } from './components/Mouse.js';

import { AlphaOverLifeSystem } from './systems/AlphaOverLifeSystem.js';
import { EulerSystem } from './systems/EulerSystem.js';
import { EmissionSystem } from './systems/EmissionSystem.js';
import { CanvasRenderSystem } from './systems/CanvasRenderSystem.js';
import { MouseSystem } from './systems/MouseSystem.js';
import { LifeSystem } from './systems/LifeSystem.js';
import { SpriteSystem } from './systems/SpriteSystem.js';
import { SpawnSystem } from './systems/SpawnSystem.js';
import { RandomPoisonSystem } from './systems/RandomPoisonSystem.js';

// HOW DO WE MOVE ALL OF THIS ELSEWHERE? MAKE THE IMPLEMENTED DO NO IMPORTS
// import Emitter from './prefabs/Emitter.js'; // NS COLLISION

let canvas = document.getElementById('canvas');
window.world = new World();

function setup() {
  let emitter = world.createEntity();
  let emission = new Emission();
  emission.active = false;
  emitter.addComponent(emission);
  emitter.addComponent(new Sprite('./assets/circle_01.png'));

  let t = new Transform();
  t.position.x = window.innerWidth * 0.5;
  t.position.y = window.innerHeight * 0.5;
  emitter.addComponent(t);
  world.addEntity(emitter);

  world.addSystem(new EulerSystem());
  world.addSystem(new CanvasRenderSystem(canvas));
  world.addSystem(new EmissionSystem());
  world.addSystem(new LifeSystem());
  world.addSystem(new MouseSystem());
  world.addSystem(new AlphaOverLifeSystem());
  world.addSystem(new SpriteSystem());
  world.addSystem(new SpawnSystem());
  world.addSystem(new RandomPoisonSystem());
}

let prevTime = 0;  
let currentTime = 0;
let deltaTime = 0;

function update(time) {
  prevTime = currentTime;
  currentTime = time;
  deltaTime = currentTime - prevTime;
  world.update(deltaTime, time);
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