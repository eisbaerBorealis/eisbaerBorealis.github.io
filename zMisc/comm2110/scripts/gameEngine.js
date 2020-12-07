const TICKS_PER_SEC = 20;
var gameActive = false;
var preGame = false;
var gameCycle;
var tickCount = 0;

function startGame() {
    console.log('EisDEBUG: Game started.');
    document.getElementById('grab').classList.remove('hidden');

    gameCycle = setInterval(() => {
		doTick();
	}, 1000 / TICKS_PER_SEC);
}

function doTick() {
    tickCount++;
    // console.log('EisDEBUG: doTick()');
    acceleratePlayer();
    movePlayer();
    targetsReact();

    updateActiveGame();
}

function setDestination(newX, newY) {
    lastClickX = newX;
    lastClickY = newY;
    newLastClick = true;
}

function acceleratePlayer() {
    if(lastClickX > -1) {

        if(detectPlayerCollision()) {
            playerXPos -= playerXStr;
            playerYPos -= playerYStr;

            playerXStr = 0;
            playerYStr = 0;
            
            lastClickX = playerXPos;
            lastClickY = playerYPos;
        } else if(detectPlayerArrival()) {
            playerXStr = 0;
            playerYStr = 0;
        } else {
            let diffX = lastClickX - playerXPos;
            let diffY = lastClickY - playerYPos;
            let diff = Math.sqrt(diffX * diffX + diffY * diffY);
            let strRatio = diff / MAX_STR;
            playerXStr = diffX / strRatio;
            playerYStr = diffY / strRatio;
        }
    } else if (boost) {
        boost = false;
    }
}

function movePlayer() {
    if(playerGrab === null) {
        playerXPos += playerXStr;
        playerYPos += playerYStr;
    } else {
        moveGrabbed();
    }
    

    if(playerGrab === 'rope1') {
        rope1XPos = playerXPos;
        rope1YPos = playerYPos;
    }
    if(playerGrab === 'rope2') {
        rope2XPos = playerXPos;
        rope2YPos = playerYPos;
    }
    if(playerGrab === 'rope3') {
        rope3XPos = playerXPos;
        rope3YPos = playerYPos;
    }
}

function toggleGrab() {
    if(playerGrab === null) {
        if(checkGrab('rope1')) {
            playerGrab = 'rope1';
            rope1XPos = playerXPos;
            rope1YPos = playerYPos;
            rope1Color = '#008000';
        }
        if(checkGrab('rope2')) {
            playerGrab = 'rope2';
            rope2XPos = playerXPos;
            rope2YPos = playerYPos;
            rope2Color = '#008000';
        }
        if(checkGrab('rope3')) {
            playerGrab = 'rope3';
            rope3XPos = playerXPos;
            rope3YPos = playerYPos;
            rope3Color = '#008000';
        }
        if(checkGrab('target1')) {
            playerGrab = 'target1';
        }
        if(checkGrab('target2')) {
            playerGrab = 'target2';
        }
        if(checkGrab('target3')) {
            playerGrab = 'target3';
        }
        document.getElementById('grab').innerHTML = 'RELEASE';
    } else {
        // turn off grab
        playerGrab = null;
        document.getElementById('grab').innerHTML = 'GRAB';

        if(rope1Color === '#008000') {
            rope1Color = '#ff0000';
        }
        if(rope2Color === '#008000') {
            rope2Color = '#ff0000';
        }
        if(rope3Color === '#008000') {
            rope3Color = '#ff0000';
        }
    }
}

function moveGrabbed() {
    let netX, netY;
    switch(playerGrab) {
        case 'rope1':
            if(200 >= getDifference(playerXPos + playerXStr, target1XPos + target1XStr, playerYPos + playerYStr, target1YPos + target1YStr)) {
                playerXPos += playerXStr;
                playerYPos += playerYStr;
                target1XPos += target1XStr;
                target1YPos += target1YStr;
            } else {
                netX = target1XStr + playerXStr;
                netY = target1YStr + playerYStr;
                if(netY < 0) {
                    playerXPos += netX;
                    playerYPos += netY;
                    target1XPos += (playerXPos - target1XPos) / 10;
                    target1YPos = playerYPos + Math.sqrt(200 * 200 - Math.pow(playerXPos - target1XPos, 2));
                } else {
                    // Target winning
                }
            }
            break;
        case 'rope2':
            if(200 >= getDifference(playerXPos + playerXStr, target2XPos + target2XStr, playerYPos + playerYStr, target2YPos + target2YStr)) {
                playerXPos += playerXStr;
                playerYPos += playerYStr;
                target2XPos += target2XStr;
                target2YPos += target2YStr;
            } else {
                netX = target2XStr + playerXStr;
                netY = target2YStr + playerYStr;
                if(netY < 0) {
                    playerXPos += netX;
                    playerYPos += netY;
                    target2XPos += (playerXPos - target2XPos) / 10;
                    target2YPos = playerYPos + Math.sqrt(200 * 200 - Math.pow(playerXPos - target2XPos, 2));
                } else {
                    // Target winning
                }
            }
            
            break;
        case 'rope3':
            if(200 >= getDifference(playerXPos + playerXStr, target3XPos + target3XStr, playerYPos + playerYStr, target3YPos + target3YStr)) {
                playerXPos += playerXStr;
                playerYPos += playerYStr;
                target3XPos += target3XStr;
                target3YPos += target3YStr;
            } else {
                netX = target3XStr + playerXStr;
                netY = target3YStr + playerYStr;
                if(netY < 0) {
                    playerXPos += netX;
                    playerYPos += netY;
                    target3XPos += (playerXPos - target3XPos) / 10;
                    target3YPos = playerYPos + Math.sqrt(200 * 200 - Math.pow(playerXPos - target3XPos, 2));
                } else {
                    // Target winning
                }
            }
            break;
        case 'target1':
            playerXPos += target1XStr + playerXStr;
            playerYPos += target1YStr + playerYStr;
            target1XPos += target1XStr + playerXStr;
            target1YPos += target1YStr + playerYStr;
            break;
        case 'target2':
            playerXPos += target2XStr + playerXStr;
            playerYPos += target2YStr + playerYStr;
            target2XPos += target2XStr + playerXStr;
            target2YPos += target2YStr + playerYStr;
            break;
        case 'target3':
            playerXPos += target3XStr + playerXStr;
            playerYPos += target3YStr + playerYStr;
            target3XPos += target3XStr + playerXStr;
            target3YPos += target3YStr + playerYStr;
            break;
        default:
            console.log('EisERROR: switch default in gameEngine.moveGrabbed()');
    }
}

function targetsReact() {
    if(target1AI !== 'green' && target1YPos < 275) {
        target1AI = 'green';
        target1YStr = 0;
        rope1XPos = target1XPos;
        rope1YPos = target1YPos;
        if(playerGrab !== null) {
            toggleGrab();
        }
    }
    if(target2AI !== 'green' && target2YPos < 275) {
        target2AI = 'green';
        target2YStr = 0;
        rope2XPos = target2XPos;
        rope2YPos = target2YPos;
        if(playerGrab !== null) {
            toggleGrab();
        }
    }
    if(target3AI !== 'green' && target3YPos < 275) {
        target3AI = 'green';
        target3YStr = 0;
        rope3XPos = target3XPos;
        rope3YPos = target3YPos;
        if(playerGrab !== null) {
            toggleGrab();
        }
    }
    
    if(playerGrab === 'rope1' || playerGrab === 'target1') {
        switch(target1AI) {
            case 'neutral':
                if(target1YPos < 500) {
                    target1AI = 'upset1';
                    console.log('EisDEBUG: target1AI now upset1');
                    target1Attract = -100;
                }
                if(playerYStr < 0) {
                    target1YStr = playerYStr / -2;
                }
                break;
            case 'upset1':
                if(playerYStr < 0) {
                    target1YStr = playerYStr / -1.5;
                }
                if(target1YPos < 500) {
                    target1Attract = -100;
                }
                break;
            case 'upset2':
                break;
            case 'upset3':
                break;
            case 'curious':
                break;
            case 'curiousB':
                break;
            case 'green':
                break;
        }
        // TODO turn green if on the other side
        //  targetStr to 0
        
    } else if(playerGrab === 'rope2' || playerGrab === 'target2') {
        switch(target2AI) {
            case 'neutral':
                if(target2YPos < 500) {
                    target2AI = 'upset1';
                    console.log('EisDEBUG: target2AI now upset1');
                    target2Attract = -100;
                }
                if(playerYStr < 0) {
                    target2YStr = playerYStr / -2;
                }
                break;
            case 'upset1':
                if(playerYStr < 0) {
                    target2YStr = playerYStr / -1.5;
                }
                if(target2YPos < 500) {
                    target2Attract = -100;
                }
                break;
            case 'upset2':
                break;
            case 'upset3':
                break;
            case 'curious':
                break;
            case 'curiousB':
                break;
            case 'green':
                break;

        }
    } else if(playerGrab === 'rope3' || playerGrab === 'target3') {
        switch(target3AI) {
            case 'neutral':
                if(target3YPos < 500) {
                    target3AI = 'upset1';
                    console.log('EisDEBUG: target3AI now upset1');
                    target3Attract = -100;
                }
                if(playerYStr < 0) {
                    target3YStr = playerYStr / -2;
                }
                break;
            case 'upset1':
                if(playerYStr < 0) {
                    target3YStr = playerYStr / -1.5;
                }
                if(target1YPos < 500) {
                    target3Attract = -100;
                }
                break;
            case 'upset2':
                break;
            case 'upset3':
                break;
            case 'curious':
                break;
            case 'curiousB':
                break;
            case 'green':
                break;

        }
    } else if(playerGrab === null) {
        // TODO if close, raise attract
    }
}