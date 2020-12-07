function detectPlayerCollision() {
    let t1Collision = 52 >= getDifference(playerXPos, target1XPos, playerYPos, target1YPos) && playerGrab !== 'target1';
    let t2Collision = 52 >= getDifference(playerXPos, target2XPos, playerYPos, target2YPos) && playerGrab !== 'target2';
    let t3Collision = 52 >= getDifference(playerXPos, target3XPos, playerYPos, target3YPos) && playerGrab !== 'target3';
    // let destCollision = 3 >= getDifference(playerXPos, lastClickX, playerYPos, lastClickY);

    if(t1Collision && target1AI === 'green') {
        t1Collision = false;
    }
    if(t2Collision && target2AI === 'green') {
        t2Collision = false;
    }
    if(t3Collision && target3AI === 'green') {
        t3Collision = false;
    }

    // if(destCollision) {
    //     console.log('EisDEBUG: reached destination!');
    // }
    
    return playerXPos < 26 || playerXPos > 374 || playerYPos < 26 || playerYPos > 574 ||
            t1Collision || t2Collision || t3Collision /*|| destCollision*/;
}

function detectPlayerArrival() {
    return 3 >= getDifference(playerXPos, lastClickX, playerYPos, lastClickY);
}

function getDifference(x1, x2, y1, y2) {
    let diffX = x1 - x2;
    let diffY = y1 - y2;
    let diff = Math.sqrt(diffX * diffX + diffY * diffY);

    return diff;
}

function checkGrab(object) {
    let canGrab = false;

    switch(object) {
        case 'rope1':
            canGrab = 24 >= getDifference(rope1XPos, playerXPos, rope1YPos, playerYPos)
            break;
        case 'rope2':
            canGrab = 24 >= getDifference(rope2XPos, playerXPos, rope2YPos, playerYPos)
            break;
        case 'rope3':
            canGrab = 24 >= getDifference(rope3XPos, playerXPos, rope3YPos, playerYPos)
            break;
        case 'target1':
            canGrab = 58 >= getDifference(target1XPos, playerXPos, target1YPos, playerYPos)
            break;
        case 'target2':
            canGrab = 58 >= getDifference(target2XPos, playerXPos, target2YPos, playerYPos)
            break;
        case 'target3':
            canGrab = 58 >= getDifference(target3XPos, playerXPos, target3YPos, playerYPos)
            break;
        default:
            console.log('EisERROR: switch default in utility.checkGrab(object)');
    }

    // if(canGrab) {
    //     console.log('EisDEBUG: canGrab is ' + canGrab);
    // }
    return canGrab;
}

function resetInfo() {

}