import Ecs from './../src/ecs.js';

let canvas = document.getElementById('canvas');
window.world = new Ecs.World();

let stats = new Stats();
document.body.appendChild(stats.dom);

function setup() {
  let emitter = new Ecs.Prefabs.Emitter();
  emitter.addComponent(new Ecs.Components.Mouse());
  emitter.components.sprite.src = './assets/radial.png';
  emitter.components.transform.position.x = window.innerWidth * 0.5;
  emitter.components.transform.position.y = window.innerHeight * 0.5;
  world.addEntity(emitter);

  world.addSystem(new Ecs.Systems.EulerSystem());
  world.addSystem(new Ecs.Systems.CanvasRenderSystem(canvas));
  world.addSystem(new Ecs.Systems.EmissionSystem());
  world.addSystem(new Ecs.Systems.LifeSystem());
  world.addSystem(new Ecs.Systems.MouseSystem());
  world.addSystem(new Ecs.Systems.AlphaOverLifeSystem());
  world.addSystem(new Ecs.Systems.SpriteSystem());
  world.addSystem(new Ecs.Systems.SpawnSystem());
  world.addSystem(new Ecs.Systems.RandomPoisonSystem());
  world.addSystem(new Ecs.Systems.ScaleOverLifeSystem());
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

function loop(time = 0) {
  stats.begin();
  update(time);
  stats.end();
  requestAnimationFrame(loop);
}

(function main() {
  setup();
  loop();
})();