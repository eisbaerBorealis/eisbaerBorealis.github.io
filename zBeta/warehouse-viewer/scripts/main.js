(function() {
    'use strict';

    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            console.log('  eisDEBUG: document ready')
            clearInterval(stateCheck);
            startup();
        }
    }, 100);
})();

function startup() {
    console.log('  eisDEBUG: startup()');
    
    addSVG();

    buildControls();

    addListeners();
}

function addSVG() {
    document.getElementById('svg-container').innerHTML = buildMapSVG();

    console.log('  eisDEBUG: svg inserted into page.');
}

function buildControls() {
    console.log('  eisDEBUG: buildControls() started');

    // document.getElementById('controls-container').insertAdjacentHTML('beforeend', '')

    // document.getElementById('controls-container').innerHTML = buildControlsSVG();
    document.getElementById('controls-container').insertAdjacentHTML('beforeend', buildControlsSVG())
    
    console.log('  eisDEBUG: buildControls() completed');
}

function addListeners() {
    console.log('  eisDEBUG: addListeners() started');

    document.getElementById('btn-right').addEventListener('click', clickRight);
    document.getElementById('btn-left').addEventListener('click', clickLeft);
    document.getElementById('btn-up').addEventListener('click', clickUp);
    document.getElementById('btn-down').addEventListener('click', clickDown);
    document.getElementById('btn-zoom-in').addEventListener('click', clickZoomIn);
    document.getElementById('btn-zoom-out').addEventListener('click', clickZoomOut);

    let racks = document.getElementsByClassName('svg-racks');
    console.log('    eisDEBUG: racks.length is ' + racks.length);
    for(let i = 0; i < racks.length; i++) {
        racks[i].addEventListener('mouseenter', mouseEnterLocation);
        racks[i].addEventListener('mouseleave', mouseLeaveLocation);

    }

    let otherAreas = document.getElementsByClassName('svg-other');
    // console.log('    eisDEBUG: racks.length is ' + racks.length);
    for(let i = 0; i < otherAreas.length; i++) {
        otherAreas[i].addEventListener('mouseenter', mouseEnterLocation);
        otherAreas[i].addEventListener('mouseleave', mouseLeaveLocation);
    }

    console.log('  eisDEBUG: addListeners() ended');
}

function clickRight() {
    moveSVG(-25, 0);
}

function clickLeft() {
    moveSVG(25, 0);
}

function clickUp() {
    moveSVG(0, 25);
}

function clickDown() {
    moveSVG(0, -25);
}

function clickZoomIn() {
    console.log('eisDEBUG: clickZoomIn()');
    resizeSVG(1.1);
}

function clickZoomOut() {
    console.log('eisDEBUG: clickZoomOut()');
    resizeSVG(1 / 1.1);
}

function mouseEnterLocation(event) {
    // console.log('TEST - mouseEnterLocation for ID ' + event.srcElement.id);
    event.srcElement.classList.add('svg-area-hover');
    document.getElementById('header').innerHTML = event.srcElement.id;
}

function mouseLeaveLocation(event) {
    // console.log('TEST - mouseLeaveLocation for ID ' + event.srcElement.id);
    event.srcElement.classList.remove('svg-area-hover');
    document.getElementById('header').innerHTML = '';
}