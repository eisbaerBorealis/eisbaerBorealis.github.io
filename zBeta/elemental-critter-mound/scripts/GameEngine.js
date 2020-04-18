const AUTO_SAVE_INTERVAL = 60;
const ACTION_DURATION = 200;

var paused;

class GameEngine {

    constructor() {
        eisDebug(2, 'EisDebug @ GameEngine.constructor, ENGINE STARTED');
        
        this.sessionTime = 0;
        this.ticks = 0;

        this.ticksPerSecond = 20;
        this.battle = null;

        this.paused = false;

        this.tickInterval = setInterval(() => {
            this.doTick();
        }, 1000 / this.ticksPerSecond);
    }

    doTick() {
        this.ticks++;

        if(this.ticks >= this.ticksPerSecond) {
            this.ticks = 0;
            this.sessionTime++;
            thePlayer.addSecond();
            if(this.sessionTime % AUTO_SAVE_INTERVAL === 0) {
                thePlayer.savePlayer();
                eisDebug(2, 'EisDebug @ GameEngine.doTick, GAME SAVED');
            }
        }

        if(!this.paused) {
            for(let i = 0; i < thePlayer.getHatcheries().length; i++) {
                thePlayer.getHatcheries()[i].doTick();
            }
        }
    }

    togglePause() {
        if(this.paused) {
            this.paused = false;
            eisDebug(2, 'EisDebug: GameEngine has been unpaused');
        } else {
            this.paused = true;
            eisDebug(2, 'EisDebug: GameEngine has been paused');
        }
    }
}