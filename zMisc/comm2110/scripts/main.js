var canvas;
var ctx;

(function() {
	'use strict';

	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
            console.log('EisDEBUG: page is ready.');
            startup();
            clearInterval(stateCheck);
		}
	}, 100);
})();

function startup() {
    console.log('EisDEBUG: starting up.');
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('mousedown', function(e) {
        getClick(canvas, e)
    })

    drawBackground();
    // doTick();
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

// function drawBackground() {
//     ctx.fillStyle = "#80ff80";
//     ctx.fillRect(0, 0, 400, 300);
//     ctx.fillStyle = "#ff8080";
//     ctx.fillRect(0, 300, 400, 300);
// }

// DRAW A LINE:
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// /* User variables*/
// const TICKS_PER_SECOND = 30;
// var celestialObjects =
// [
//     {}
// ];

// /* Do not change! */
// const TICK_LENGTH = 1000 / TICKS_PER_SECOND;
// var windowWidth;
// var windowHeight;
// var largerSideLength;
// var drawInterval;
// var ctx;

// $(document).ready(function()
// {
//     $(document.body).html("<canvas id=\"spaceCanvas\"></canvas>");
//     ctx = document.getElementById("spaceCanvas").getContext("2d");
//     updateWindowSize();

// //    randomizePlanets()
//     drawInterval = setInterval(drawSpace, TICK_LENGTH);
// });

// function updateWindowSize()
// {
//     windowWidth = window.innerWidth;
//     windowHeight = window.innerHeight;
//     ctx.canvas.width  = windowWidth;
//     ctx.canvas.height  = windowHeight;
//     largerSideLength = windowWidth;
//     if(windowHeight > largerSideLength)
//     {
//         largerSideLength = windowHeight;
//     }
// }

// function drawSpace()
// {
//     var ctx = document.getElementById("spaceCanvas").getContext("2d");
//     drawBackground();
//     drawText()
// }

// function drawBackground()
// {
//     var grd = ctx.createRadialGradient(windowWidth/2, windowHeight/2, windowWidth/10,
//             windowWidth/2, windowHeight/2, largerSideLength/2);
//     grd.addColorStop(0, "#333333");
//     grd.addColorStop(1, "#000000");
//     ctx.fillStyle = grd;
//     ctx.fillRect(0, 0, windowWidth, windowHeight);
// }

// function drawText()
// {
//     ctx.font = "30px Consolas";
//     ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
//     ctx.fillText("Waiting for something", windowWidth/2 - 185, windowHeight/2 - 85);
//     ctx.font = "50px Consolas";
//     ctx.fillText("BIG", windowWidth/2 - 55, windowHeight/2 - 25);
//     ctx.font = "30px Consolas";
//     ctx.fillText("to happen", windowWidth/2 - 95, windowHeight/2 + 25);
//     //ctx.globalAlpha = 0.5
// }