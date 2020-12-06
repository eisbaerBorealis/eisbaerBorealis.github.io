const TICKS_PER_SEC = 20;
var gameActive = false;
var preGame = false;
var gameCycle;

function startGame() {
    console.log('EisDEBUG: Game started.');
    gameCycle = setInterval(() => {
		doTick();
	}, 1000 / TICKS_PER_SEC);
}

function doTick() {
    // console.log('EisDEBUG: doTick()');
    acceleratePlayer();
    movePlayer();

    updateActiveGame();
}

function setDestination(newX, newY) {
    lastClickX = newX;
    lastClickY = newY;
    newLastClick = true;
}

function acceleratePlayer() {
    if(newLastClick) {
        newLastClick = false;

        let diffX = lastClickX - playerXPos;
        let diffY = lastClickY - playerYPos;
        let diff = Math.sqrt(diffX * diffX + diffY * diffY);
        let strRatio = diff / MAX_STR;
        playerXStr = diffX / strRatio;
        playerYStr = diffY / strRatio;
    } else if (boost) {
        boost = false;
    } else {
        // stop if location is reached or collision detected
        if(detectPlayerCollision()) {
            playerXStr = 0;
            playerYStr = 0;
        }
    }
}

function movePlayer() {
    playerXPos += playerXStr;
    playerYPos += playerYStr;
}

function resetInfo() {

}