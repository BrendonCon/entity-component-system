import Emission from './components/Emission.js';
import Mouse from './components/Mouse.js';
import PhysicsBody from './components/PhysicsBody.js';
import Sprite from './components/Sprite.js';
import Transform from './components/Transform.js';

import Component from './core/Component.js';
import Engine from './core/Engine.js';
import Entity from './core/Entity.js';
import System from './core/System.js';

import Vec2 from './math/Vec2.js';
import Vec3 from './math/Vec3.js';

import Particle from './prefab/Particle.js';

import CanvasRenderSystem from './systems/CanvasRenderSystem.js';
import EmissionSystem from './systems/EmissionSystem.js';
import EulerSystem from './systems/EulerSystem.js';
import MouseSystem from './systems/MouseSystem.js';

export default {
  Core: {
    Component,
    Engine,
    Entity,
    System
  },
  Components: {
    Emission,
    Mouse,
    PhysicsBody,
    Sprite,
    Transform
  },
  Math: {
    Vec2,
    Vec3
  },
  Prefab: {
    Particle
  },
  Systems: {
    CanvasRenderSystem,
    EmissionSystem,
    EulerSystem,
    MouseSystem
  }
};