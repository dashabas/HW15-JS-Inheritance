function Clock(element) {
    this.element = element;
    this.fullFormat = true;
    this.shortFormat = false;
    this.element.addEventListener('click', () => {
        this.changeFormat();
    });
}

Clock.prototype.render = function () {
    if (this.fullFormat) {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0];
    } else {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
    }
}

Clock.prototype.changeFormat = function () {
    this.fullFormat = !this.fullFormat;
    this.shortFormat = !this.shortFormat;
}

const clock = new Clock(document.querySelector('.clock'));
setInterval(() => clock.render(), 1000);


function ClockFullFormat(element) {
    Clock.call(this, element);
}

ClockFullFormat.prototype = Object.create(Clock.prototype);
ClockFullFormat.prototype.constructor = ClockFullFormat;

ClockFullFormat.prototype.render = function () {
    this.element.innerHTML = new Date().toTimeString().split(' ')[0];

    if (!this.fullFormat) {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
    }
}

const fullClock = new ClockFullFormat(document.querySelector('.clock-full-format'));
setInterval(() => fullClock.render(), 1000);


function ClockShortFormat(element) {
    Clock.call(this, element);
}

ClockShortFormat.prototype = Object.create(Clock.prototype);
ClockShortFormat.prototype.constructor = ClockShortFormat;

ClockShortFormat.prototype.render = function () {
    if (this.shortFormat) {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0];
    } else {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
    }
}

const shortClock = new ClockShortFormat(document.querySelector('.clock-short-format'));
setInterval(() => shortClock.render(), 1000);

console.log(clock);
console.log(fullClock);
console.log(shortClock);