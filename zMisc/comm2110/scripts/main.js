var canvas;
var ctx;

(function() {
	'use strict';

	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
            // console.log('EisDEBUG: page is ready.');
            startup();
            clearInterval(stateCheck);
		}
	}, 100);
})();

function startup() {
    // console.log('EisDEBUG: starting up.');
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    document.getElementById('pull').onclick = function() {
        
    };
    document.getElementById('grab').onclick = function() {
        toggleGrab();
        // console.log('toggleGrab');
    };
    document.getElementById('giveUp').onclick = function() {
        
    };
    canvas.addEventListener('mousedown', function(e) {
        getClick(canvas, e)
    })

    drawBackground();
    drawStartButton();
}

function getClick(canvas, event) {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top

    if(!gameActive) {
        if(!preGame) {
            let xDiff = x - 200;
            let yDiff = y - 300;
            let diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

            if(diff < 52) {
                console.log('SUCCESS, start button clicked.');
                preGame = true;
                // show intro
                drawBackground();
                drawIntro();
            }
        } else {
            // start game
            preGame = false;
            gameActive = true;
            startGame();
        }
    } else {
        // game is active
        setDestination(x, y);
    }

    // console.log("x: " + x + " y: " + y)
}