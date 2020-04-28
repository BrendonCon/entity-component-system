export class FixedTimeStep {
  constructor(opts = {}) {
    this.fps = opts.fps || 60;
    this.frameDelta = 1000 / this.fps;
    this.accumulator = opts.accumulator || 0;
    this.accumulationClamp = opts.accumulationClamp || 100;
    this.frameStartTime = 0;
    this.time = 0;
    this.update = opts.update || (() => {});
    this.raf = undefined;
  }
  
  loop() {
    this.raf = requestAnimationFrame(deltaTime => this.step(deltaTime));
  }

  step(deltaTime) {
    this.time += deltaTime;
    this.accumulator += deltaTime - this.frameStartTime;
    this.frameStartTime = deltaTime;

    if (this.accumulator > this.accumulationClamp) {
      this.accumulator = this.accumulationClamp;
    }

    while (this.accumulator > this.frameDelta) {
      this.update(this.frameDelta);
      this.accumulator -= this.frameDelta;
    } 
  }
}