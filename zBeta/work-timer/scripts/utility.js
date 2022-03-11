function setRingById(id, newRadius, newWidth) {
    document.getElementById(id).setAttribute('r', newRadius);
    document.getElementById(id).setAttribute('stroke-width', newWidth);
}

function adjustRingByNum(hour, radiusChange, widthChange) {
    let ringElem = document.getElementById(hour + 'oclock');
    let newRadius = Number(ringElem.getAttribute('r')) + radiusChange
    
    ringElem.setAttribute('r', newRadius);
    ringElem.setAttribute('stroke-width', Number(ringElem.getAttribute('stroke-width')) + widthChange);
    if(hasText) {
        document.getElementById('clck-' + hour).setAttribute('y', 404 - newRadius);
    }
}

function checkRings() {
    let tempBroken = false;

    // if(animCountdown <= 0) {
    for (let i = 9; i <= 16; i++) {
        let ringElem = document.getElementById(i + 'oclock');
        let ringRad = Number(ringElem.getAttribute('r'));
        let ringWidth = Number(ringElem.getAttribute('stroke-width'));

        if(((currHour  <  i) && (ringWidth !== 10 || ringRad !== RING_RADS[i-7])) ||
            ((currHour === i) && (ringWidth !== 40 || ringRad !== RING_RADS[i-8])) ||
            ((currHour  >  i) && (ringWidth !== 10 || ringRad !== RING_RADS[i-9]))) {
            tempBroken = true;
            console.log('  eisDEBUG: ring ' + i + ' is broken.');
            i = 16;
        }
    }
    // }

    isBroken = tempBroken;
}

function updateLineById(id, cx, cy, dx1, dy1, dx2, dy2) {
    let lineElem = document.getElementById(id);
    lineElem.setAttribute('x1', cx + dx1);
    lineElem.setAttribute('y1', cy + dy1);
    lineElem.setAttribute('x2', cx + dx2);
    lineElem.setAttribute('y2', cy + dy2);
}