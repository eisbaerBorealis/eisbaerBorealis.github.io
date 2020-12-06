const CIRCLE_RADIUS = 25;

function updateActiveGame() {
    drawBackground();
    drawHighlights();
    drawRopes();
    drawTargets();
    drawPlayer();
}

function drawBackground() {
    ctx.clearRect(0, 0, 400, 600)

    ctx.fillStyle = "#80ff80";
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = "#ff8080";
    ctx.fillRect(0, 300, 400, 300);
}

function drawHighlights() {
    
}

function drawRopes() {
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(rope1XPos, rope1YPos);
    ctx.lineTo(target1XPos, target1YPos);
    ctx.strokeStyle = rope1Color;
    ctx.stroke();

    ctx.moveTo(rope2XPos, rope2YPos);
    ctx.lineTo(target2XPos, target2YPos);
    ctx.strokeStyle = rope2Color;
    ctx.stroke();

    ctx.moveTo(rope3XPos, rope3YPos);
    ctx.lineTo(target3XPos, target3YPos);
    ctx.strokeStyle = rope3Color;
    ctx.stroke();
    ctx.closePath();
}

function drawTargets() {
    ctx.fillStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#800000';

    ctx.beginPath();
    ctx.arc(target1XPos, target1YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(target2XPos, target2YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(target3XPos, target3YPos, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawPlayer() {
    // ctx.fillStyle = '#00a000';
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = '#008000';

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