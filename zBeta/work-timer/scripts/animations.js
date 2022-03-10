var currAnimation = -1;
var animCountdown = 0;
var isBroken = false;
var hasText = false;
var addTextCounter = 0;

function fixRings() {
    let ringsFixed = 0;

    for (let i = 9; i <= 16; i++) {
        let ringElem = document.getElementById(i + 'oclock');
        let ringRad = Number(ringElem.getAttribute('r'));
        let ringWidth = Number(ringElem.getAttribute('stroke-width'));
        let radiusDelta = 0;
        let widthDelta = 0;

        let correctRadius, correctWidth;
        if(currHour < i) {
            correctRadius = RING_RADS[i-7];
            correctWidth = 10;
        } else if(currHour === i) {
            correctRadius = RING_RADS[i-8];
            correctWidth = 40;
        } else { // if(currHour > i)
            correctRadius = RING_RADS[i-9];
            correctWidth = 10;
        }
        if(ringRad < correctRadius) {
            radiusDelta = RING_RADIUS_DELTA_PER;
        } else if(ringRad > correctRadius) {
            radiusDelta = -1 * RING_RADIUS_DELTA_PER;
        }
        if(ringWidth < correctWidth) {
            widthDelta = RING_WIDTH_DELTA_PER;
        } else if(ringWidth > correctWidth) {
            widthDelta = -1 * RING_WIDTH_DELTA_PER;
        }

        if(radiusDelta !== 0 || widthDelta !== 0) {
            if(Math.abs(correctRadius - ringRad) > RING_RADIUS_DELTA_PER * 100) {
                radiusDelta = (correctRadius - ringRad) / 100;
            } else if(Math.abs(correctRadius - ringRad) < RING_RADIUS_DELTA_PER) {
                radiusDelta = correctRadius - ringRad;
            }
            if(Math.abs(correctWidth - ringWidth) > RING_WIDTH_DELTA_PER * 100) {
                widthDelta = (correctWidth - ringWidth) / 100;
            } else if(Math.abs(correctWidth - ringWidth) < RING_WIDTH_DELTA_PER) {
                widthDelta = correctWidth - ringWidth;
            }
            adjustRingByNum(i, radiusDelta, widthDelta);
            ringsFixed++;
        }
    }

    if(ringsFixed === 0) {
        isBroken = false;
    }
}

function addText() {
    if(addTextCounter >= 5) {
        addTextCounter = 0;
        let addedText = false;
        for(let i = 9; i <= 16; i++) {
            let textElem = document.getElementById('clck-' + i);
            if(textElem.getAttribute('y') < 0) {
                addedText = true;
                // IMPORTANT! move text
                let ringY = 400 - document.getElementById(i + 'oclock').getAttribute('r');
                textElem.setAttribute('y', ringY + 4);
                i = 17;
            }
        }
        if(!addedText) {
            hasText = true;
        }
    } else {
        addTextCounter++;
    }
}