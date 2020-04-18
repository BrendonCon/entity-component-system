export default class Logger {
  constructor() {
    this.console = console;
  }

  log(msg) {
    this.console.log(msg);
  }

  warn(msg) {
    this.console.warn(msg);
  }

  error(msg) {
    this.console.error(msg);
  }

  info(msg) {
    this.console.info(msg);
  }
}