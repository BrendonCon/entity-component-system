import { Component } from '../core/Component.js';

export class Emission extends Component {
  particleCount = 25;
  emitAmount = 1;
  rate = 50;
  duration = Infinity;
  elapsed = this.rate;
  index = 0;
  startIndex = 0;
  endIndex = 0;
  speed = 1;
}