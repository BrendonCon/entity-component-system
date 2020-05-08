export default class Logger {
  constructor() {
    this._console = console;
  }

  log(msg) {
    this._console.log(
      `%cLOG:%c${msg}`,
      'font-weight: bold; color: #fff; background: #008C31; padding: 0.25em;',
      'color: #fff; background: #008C31; padding: 0.25em;'
    );
  }

  warn(msg) {
    this._console.log(
      `%cWARNING:%c${msg}`,
      'font-weight: bold; color: #fff; background: #D87400; padding: 0.25em;',
      'color: #fff; background: #D87400; padding: 0.25em;'
    );
  }

  error(msg) {
    this._console.log(
      `%cERROR:%c${msg}`,
      'font-weight: bold; color: #fff; background: #C72C1C; padding: 0.25em;',
      'color: #fff; background: #C72C1C; padding: 0.25em;'
    );
  }

  info(msg) {
    this._console.log(
      `%cINFO:%c${msg}`,
      'font-weight: bold; color: #fff; background: #0057A0; padding: 0.25em;',
      'color: #fff; background: #0057A0; padding: 0.25em;'
    );
  }
}
