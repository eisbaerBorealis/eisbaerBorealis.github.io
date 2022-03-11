var currHour = 0;
var currMin = 0;
var currSec = 0;
var currMSec = 0;
var engineInterval;

function startEngine() {
    console.log('  eisDEBUG: startEngine()');
    engineInterval = setInterval(() => {
        tick();
    }, 1000 / TICKS_PER_SEC);

    isBroken = true;
    if(FAST_MODE) {
        currHour = 8;
    }
    updateTime();
    updateDigitalClock();
    updateAnalogClock();
}

function tick() {
    if(FAST_MODE) {
        currMSec += 6000;
    } else {
        currMSec += 1000 / TICKS_PER_SEC;
    }
    
    if (currMSec >= 1000) {
        currSec += Math.floor(currMSec / 1000);
        currMSec %= 1000;
        updateTime();
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

    if(currSec % 60 === 0 && currMSec === 0) {
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
    let secRatio = (currSec % 60) / 60;
    let minRatio = currSec / 3600;
    let hourRatio = (currHour * 3600 + currSec) / 43200;

    let secSin = Math.sin(secRatio * TWO_PI);
    let secCos = Math.cos(secRatio * TWO_PI);
    let minSin = Math.sin(minRatio * TWO_PI);
    let minCos = Math.cos(minRatio * TWO_PI);
    let hourSin = Math.sin(hourRatio * TWO_PI);
    let hourCos = Math.cos(hourRatio * TWO_PI);

    // x1, y1, x2, y2
    let secX1 = S_HAND_LG * secSin;
    let secY1 = S_HAND_LG * secCos * -1;
    let secX2 = S_HAND_ST * secSin * -1;
    let secY2 = S_HAND_ST * secCos;
    
    let minX1 = M_HAND_LG * minSin;
    let minY1 = M_HAND_LG * minCos * -1;
    let minX2 = M_HAND_ST * minSin * -1;
    let minY2 = M_HAND_ST * minCos;
    
    let hourX1 = H_HAND_LG * hourSin;
    let hourY1 = H_HAND_LG * hourCos * -1;
    let hourX2 = H_HAND_ST * hourSin * -1;
    let hourY2 = H_HAND_ST * hourCos;

    updateLineById('s-hand', SM_CLK_X, SM_CLK_Y, secX1, secY1, secX2, secY2);
    updateLineById('m-hand', SM_CLK_X, SM_CLK_Y, minX1, minY1, minX2, minY2);
    updateLineById('h-hand', SM_CLK_X, SM_CLK_Y, hourX1, hourY1, hourX2, hourY2);
}

function updateTime() {
    if(!FAST_MODE) {
        let time = new Date();
        
        currHour = time.getHours();
        currMin = time.getMinutes();
        currSec = currMin * 60 + time.getSeconds();
    } else {
        currMin = Math.floor(currSec / 60);
    }

    // check digital clock and update if necessary
    let digitalTime = document.getElementById('dg-clck-text').innerHTML.split(':');
    if(digitalTime[0] != currHour || digitalTime[1] != currMin) {
        updateDigitalClock();
    }
}

function killEngine() {
    clearInterval(engineInterval);
}