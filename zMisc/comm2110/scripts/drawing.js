const CIRCLE_RADIUS = 25;

function updateActiveGame() {
    drawBackground();
    drawAttract();
    drawHighlights();
    drawRopes();
    drawTargets();
    drawPlayer();
    //drawSymbols();
    drawTimer();
}

function drawBackground() {
    ctx.clearRect(0, 0, 400, 600)

    ctx.fillStyle = "#80ff80";
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = "#ff8080";
    ctx.fillRect(0, 300, 400, 300);
}

function drawAttract() {
    let attractRadius;

    if(target1AI !== 'green' && target1Attract > -30) {
        let fillColor = '#00a000';
        // console.log('EisDEBUG: drawing target1Attract');
        // transparency should be low for -30 and high for -1
        // 9 + (target1Attract / 4)
        if(target1Attract < 0) {
            fillColor += (Math.floor(9 + (target1Attract / 4)))  + '0'
        } else {
            fillColor += 'aa';
        }
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        // radius should be ~50 down to 30.
        attractRadius = (target1Attract * -1) + 26;
        if(attractRadius < 35) {
            attractRadius = 35;
        }
        ctx.arc(target1XPos, target1YPos, attractRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
    if(target2AI !== 'green' && target2Attract > -30) {
        let fillColor = '#00a000';
        if(target2Attract < 0) {
            fillColor += (Math.floor(9 + (target2Attract / 4)))  + '0'
        } else {
            fillColor += 'aa';
        }
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        attractRadius = (target2Attract * -1) + 26;
        if(attractRadius < 35) {
            attractRadius = 35;
        }
        ctx.arc(target2XPos, target2YPos, attractRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
    if(target3AI !== 'green' && target3Attract > -30) {
        let fillColor = '#00a000';
        if(target3Attract < 0) {
            fillColor += (Math.floor(9 + (target3Attract / 4)))  + '0'
        } else {
            fillColor += 'aa';
        }
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        attractRadius = (target3Attract * -1) + 26;
        if(attractRadius < 35) {
            attractRadius = 35;
        }
        ctx.arc(target3XPos, target3YPos, attractRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
}

function drawHighlights() {
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ffff80';
    ctx.fillStyle = '#ffff80';

    let canGrab = false;

    if(target1AI !== 'green' && checkGrab('rope1')) {
        canGrab = true;
        ctx.beginPath();
        ctx.moveTo(rope1XPos, rope1YPos);
        ctx.lineTo(target1XPos, target1YPos);
        ctx.stroke();
        ctx.closePath();
    }
    if(target2AI !== 'green' && checkGrab('rope2')) {
        canGrab = true;
        ctx.beginPath();
        ctx.moveTo(rope2XPos, rope2YPos);
        ctx.lineTo(target2XPos, target2YPos);
        ctx.stroke();
        ctx.closePath();
    }
    if(target3AI !== 'green' && checkGrab('rope3')) {
        canGrab = true;
        ctx.beginPath();
        ctx.moveTo(rope3XPos, rope3YPos);
        ctx.lineTo(target3XPos, target3YPos);
        ctx.stroke();
        ctx.closePath();
    }
    if(target1AI !== 'green' && checkGrab('target1')) {
        canGrab = true;
        ctx.beginPath();
        ctx.arc(target1XPos, target1YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    if(target2AI !== 'green' && checkGrab('target2')) {
        canGrab = true;
        ctx.beginPath();
        ctx.arc(target2XPos, target2YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    if(target3AI !== 'green' && checkGrab('target3')) {
        canGrab = true;
        ctx.beginPath();
        ctx.arc(target3XPos, target3YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(canGrab && !document.getElementById('grab').classList.contains('activeButton')) {
        document.getElementById('grab').classList.add('activeButton');
        document.getElementById('grab').classList.add('clickable');
    }
    if(!canGrab && document.getElementById('grab').classList.contains('activeButton')) {
        document.getElementById('grab').classList.remove('activeButton');
        document.getElementById('grab').classList.remove('clickable');
    }
}

function drawRopes() {
    ctx.lineWidth = 4;

    if(target1AI !== 'green') {
        ctx.beginPath();
        ctx.moveTo(rope1XPos, rope1YPos);
        ctx.lineTo(target1XPos, target1YPos);
        ctx.strokeStyle = rope1Color;
        ctx.stroke();
        ctx.closePath();
    }

    if(target2AI !== 'green') {
        ctx.beginPath();
        ctx.moveTo(rope2XPos, rope2YPos);
        ctx.lineTo(target2XPos, target2YPos);
        ctx.strokeStyle = rope2Color;
        ctx.stroke();
        ctx.closePath();
    }

    if(target3AI !== 'green') {
        ctx.beginPath();
        ctx.moveTo(rope3XPos, rope3YPos);
        ctx.lineTo(target3XPos, target3YPos);
        ctx.strokeStyle = rope3Color;
        ctx.stroke();
        ctx.closePath();
    }
}

function drawTargets() {
    ctx.lineWidth = 2;

    // ctx.fillStyle = '#ff0000';
    // ctx.strokeStyle = '#800000';

    if(target1AI === 'green') {
        ctx.fillStyle = '#00a000';
        ctx.strokeStyle = '#008000';
    } else {
        ctx.fillStyle = '#ff0000';
        ctx.strokeStyle = '#800000';
    }
    ctx.beginPath();
    ctx.arc(target1XPos, target1YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(target2AI === 'green') {
        ctx.fillStyle = '#00a000';
        ctx.strokeStyle = '#008000';
    } else {
        ctx.fillStyle = '#ff0000';
        ctx.strokeStyle = '#800000';
    }
    ctx.beginPath();
    ctx.arc(target2XPos, target2YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(target3AI === 'green') {
        ctx.fillStyle = '#00a000';
        ctx.strokeStyle = '#008000';
    } else {
        ctx.fillStyle = '#ff0000';
        ctx.strokeStyle = '#800000';
    }
    ctx.beginPath();
    ctx.arc(target3XPos, target3YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    drawSymbols();
}

function drawSymbols() {

}

function drawPlayer() {
    if(lastClickX > -1) {
        ctx.strokeStyle = '#00cc00';
        ctx.lineWidth = 5;
        
        ctx.beginPath();
        ctx.moveTo(lastClickX-10, lastClickY-10);
        ctx.lineTo(lastClickX+10, lastClickY+10);
        ctx.stroke();
        
        ctx.moveTo(lastClickX-10, lastClickY+10);
        ctx.lineTo(lastClickX+10, lastClickY-10);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.beginPath();
    ctx.arc(playerXPos, playerYPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#00a000';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#008000';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawTimer() {
    let seconds = tickCount / TICKS_PER_SEC;
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let timerText = minutes + ':';
    if(seconds < 10) {
        timerText += '0';
    }
    timerText += seconds;
    ctx.font = "60px Share Tech Mono";
    ctx.fillStyle = "#000000";
    ctx.fillText(timerText, 140, 60);
}

function drawStartButton() {
    ctx.fillStyle = '#ffff80';
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.arc(200, 300, 50, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.font = "30px Consolas";
    ctx.fillStyle = "#000000";
    ctx.fillText("START", 200-40, 300+8);
}

function drawIntro() {
    ctx.fillStyle = "#ffff80c0";
    ctx.fillRect(50, 150, 300, 300);

    ctx.font = "14px Consolas";
    ctx.fillStyle = "#000000";

    for(let i = 0; i < introText.length; i++) {
        ctx.fillText(introText[i], 60, 170 + 20 * i);
    }
}