import { Clock } from "./clock.mjs";

class ExtendedClock extends Clock{
    constructor({template}, precision = 1000) {
        super({template});
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval (() => this.render(), this.precision);
      };
}

const clock = new ExtendedClock({ template: 'h:m:s', precision: 500 });
clock.start();
