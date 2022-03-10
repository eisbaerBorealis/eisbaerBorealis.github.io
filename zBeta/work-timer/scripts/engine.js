var currHour = 8;
var currMin = 0;
var currSec = 0;
var currMSec = 0;
var engineInterval;

function startEngine() {
    console.log('  eisDEBUG: startEngine()');
    engineInterval = setInterval(() => {
        tick();
    }, 1000 / TICKS_PER_SEC);
}

function tick() {
    // currMSec += 1000 / TICKS_PER_SEC;
    /*TEMP*/currMSec += 6000;
    // 600 ticks per "hour" (15 seconds at 40 ticks per second)
    // 1 hour = 600 ticks, 1 minute = 10 ticks, 1 tick = 6 seconds
    if (currMSec >= 1000) {
        currSec += Math.floor(currMSec / 1000);
        currMSec %= 1000;
        updateAnalogClock();
    }if(isBroken) {
        fixRings();
    } else if(currMSec === 0) {
        checkRings();
    }

    if(currSec >= 3600) {
        currHour += Math.floor(currSec / 3600);
        if(currHour > 23) {
            currHour %= 24;
        }
        currMin = 0;
        currSec %= 3600;
        console.log('  eisDEBUG: tick(), currHour is now ' + currHour);
        updateDigitalClock();
    }

    if(Math.floor(currSec / 60) !== currMin) {
        currMin = Math.floor(currSec / 60);
        updateDigitalClock();
    }

    updateActiveRing();
}

function updateDigitalClock() {
    // console.log('  eisDEBUG: updateDigitalClock()');

    let time = '';
    if (currHour < 10) {
        time += '0'
    }
    time += currHour + ':'
    if (currMin < 10) {
        time += '0'
    }
    time += currMin;

    document.getElementById('dg-clck-text').innerHTML = time;
}

function updateActiveRing() {
    let activeRingElem = document.getElementById('active-ring');
    let activeBackElem = null;
    if(currHour >= 9 && currHour <= 16) {
        activeBackElem = document.getElementById(currHour + 'oclock');
    }
    
    let radius = activeRingElem.getAttribute('r');

    if(activeBackElem !== null) {
        let width = document.getElementById('active-ring').getAttribute('stroke-width');
        let backRadius = activeBackElem.getAttribute('r');
        let backWidth = activeBackElem.getAttribute('stroke-width');
        if(width !== backWidth || radius !== backRadius) {
            setRingById('active-ring', backRadius, backWidth * 0.875);
        }
    }

    let length = radius * 2 * Math.PI;
    let ringRatio = 0;
    if(currHour >= 9 && currHour <= 16) {
        ringRatio = currSec / 3600;
    }
    let dashArray = (ringRatio * length) + ' ' + Math.round(length);
    document.getElementById('active-ring').setAttribute('stroke-dasharray', dashArray);

    if(!isBroken && !hasText) {
        addText();
    }
}

function updateAnalogClock() {

}

function killEngine() {
    clearInterval(engineInterval);
}