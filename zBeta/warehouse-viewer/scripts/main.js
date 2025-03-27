var isClicked = false;
var prevX, prevY;

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
z
    addListeners();
}

function addSVG() {
    document.getElementById('svg-container').innerHTML = buildMapSVG();

    console.log('  eisDEBUG: svg inserted into page.');
}

function buildControls() {
    console.log('  eisDEBUG: buildControls() started');

    document.getElementById('controls-container').insertAdjacentHTML('beforeend', buildControlsSVG())
    
    console.log('  eisDEBUG: buildControls() completed');
}

function addListeners() {
    console.log('  eisDEBUG: addListeners() started');

    document.getElementById('btn-right').addEventListener('click', (event) => {moveSVG(-25, 0);});
    document.getElementById('btn-left').addEventListener('click', (event) => {moveSVG(25, 0);});
    document.getElementById('btn-up').addEventListener('click', (event) => {moveSVG(0, 25);});
    document.getElementById('btn-down').addEventListener('click', (event) => {moveSVG(0, -25);});
    document.getElementById('btn-zoom-in').addEventListener('click', (event) => {
        let windowCenterX = (document.body.offsetWidth / 2).toFixed(0);
        let windowCenterY = (document.body.offsetHeight / 2).toFixed(0);
        resizeSVG(1.1, windowCenterX, windowCenterY);
    });
    document.getElementById('btn-zoom-out').addEventListener('click', (event) => {
        let windowCenterX = (document.body.offsetWidth / 2).toFixed(0);
        let windowCenterY = (document.body.offsetHeight / 2).toFixed(0);
        resizeSVG(1 / 1.1, windowCenterX, windowCenterY);
    });
    document.getElementById('btn-download').addEventListener('click', (event) => {downloadSVG();});

    let racks = document.getElementsByClassName('svg-racks');
    console.log('    eisDEBUG: racks.length is ' + racks.length);
    for(let i = 0; i < racks.length; i++) {
        racks[i].addEventListener('mouseenter', (event) => {
            racks[i].classList.add('svg-area-hover');
            document.getElementById('header').innerHTML = racks[i].id;
        });
        racks[i].addEventListener('mouseleave', (event) => {
            racks[i].classList.remove('svg-area-hover');
            document.getElementById('header').innerHTML = '';
        });
    }

    let otherAreas = document.getElementsByClassName('svg-other');
    for(let i = 0; i < otherAreas.length; i++) {
        otherAreas[i].addEventListener('mouseenter', (event) => {
            otherAreas[i].classList.add('svg-area-hover');
            document.getElementById('header').innerHTML = otherAreas[i].id;
        });
        otherAreas[i].addEventListener('mouseleave', (event) => {
            otherAreas[i].classList.remove('svg-area-hover');
            document.getElementById('header').innerHTML = '';
        });
    }

    document.addEventListener('wheel', (event) => {
        if(event.deltaY > 0) {
            resizeSVG(1 / 1.1, event.clientX, event.clientY);
        } else if(event.deltaY < 0) {
            resizeSVG(1.1, event.clientX, event.clientY);
        }
        console.log('  eisDEBUG: clientX is ' + event.clientX);
    });

    document.addEventListener('mousedown', (event) => {
        isClicked = true;
        prevX = event.clientX;
        prevY = event.clientY;
    });

    document.addEventListener('mouseup', (event) => {
        isClicked = false;
    });

    document.addEventListener('mousemove', (event) => {
        if(isClicked) {
            let currX = event.clientX;
            let currY = event.clientY;
            moveSVG(currX - prevX , currY - prevY);
            prevX = currX;
            prevY = currY;
        }
    });

    console.log('  eisDEBUG: addListeners() ended');
}