import { AlphaOverLife } from './components/AlphaOverLife.js';
import { Color } from './components/Color.js';
import { Emission } from './components/Emission.js';
import { Life } from './components/Life.js';
import { Mouse } from './components/Mouse.js';
import { Particle } from './components/Particle.js';
import { PhysicsBody } from './components/PhysicsBody.js';
import { Rectangle } from './components/Rectangle.js';
import { ScaleOverLife } from './components/ScaleOverLife.js';
import { Sprite } from './components/Sprite.js';
import { Transform } from './components/Transform.js';

export let Components = {
  AlphaOverLife,
  Transform,
  Sprite,
  PhysicsBody,
  Emission,
  Mouse,
  Color,
  Life,
  Particle,
  Rectangle,
  ScaleOverLife,
};

import { AlphaOverLifeSystem } from './systems/AlphaOverLifeSystem.js';
import { EulerSystem } from './systems/EulerSystem.js';
import { EmissionSystem } from './systems/EmissionSystem.js';
import { CanvasRenderSystem } from './systems/CanvasRenderSystem.js';
import { MouseSystem } from './systems/MouseSystem.js';
import { LifeSystem } from './systems/LifeSystem.js';
import { SpriteSystem } from './systems/SpriteSystem.js';
import { SpawnSystem } from './systems/SpawnSystem.js';
import { RandomPoisonSystem } from './systems/RandomPoisonSystem.js';
import { ScaleOverLifeSystem } from './systems/ScaleOverLifeSystem.js';

export let Systems = {
  AlphaOverLifeSystem,
  EulerSystem,
  EmissionSystem,
  CanvasRenderSystem,
  MouseSystem,
  LifeSystem,
  SpriteSystem,
  SpawnSystem,
  RandomPoisonSystem,
  ScaleOverLifeSystem,
};

import { Emitter } from './prefabs/Emitter.js';
import { Enemy } from './prefabs/Enemy.js';

export let Prefabs = {
  Emitter,
  Enemy
};

import { World } from './core/World.js';
import { Entity } from './core/Entity.js';
import { Component } from './core/Component.js';
import { System } from './core/System.js';

export default {
  Components,
  Systems,
  World, 
  Component,
  System,
  Entity,
  Prefabs,
};