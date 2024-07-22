const TICKS_PER_SEC = 20;
var tickCount = 0;

function startEngine() {
    console.log('  eisDEBUG: startEngine()');
    engineInterval = setInterval(() => {
        tick();
    }, 1000 / TICKS_PER_SEC);
}

function tick() {
    if(tickCount % 200 === 0) {
        console.log('tickCount is ' + tickCount);
    }
    tickCount++;
}

function killEngine() {
    clearInterval(engineInterval);
}