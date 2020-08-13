const AUTO_SAVE_INTERVAL = 60;

var paused;

class GameEngine {

    constructor() {
        console.log('EisbaerDebug @ GameEngine.constructor, ENGINE STARTED');
        
        this.ticks = 0;
        this.ticksPerSecond = 20;
        this.secondsPerRound = 60;
        this.paused = true;

        this.timer = new Timer();

        this.tickInterval = setInterval(() => {
            this.doTick();
        }, 1000 / this.ticksPerSecond);
    }

    doTick() {
        if(!this.paused) {
            this.ticks++;
            
            let time1 = 1.0 - this.ticks % (this.ticksPerSecond * this.secondsPerRound) / (this.ticksPerSecond * this.secondsPerRound);
            let time2 = 1.0 - this.ticks % this.ticksPerSecond / this.ticksPerSecond;

            if(time2 >= 1) {
                time2 = 0;
            }
            
            this.timer.updateTimer(time1, time2);

            if(this.ticks >= this.ticksPerSecond * this.secondsPerRound) {
                this.paused = true;
                this.ticks = 0;
                this.timer.updateTimer(1, -1);
            }
        }
    }

    togglePause() {
        this.paused = !this.paused;
    }
}