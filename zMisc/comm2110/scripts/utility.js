function detectPlayerCollision() {
    let t1Collision = 52 >= getDifference(playerXPos, target1XPos, playerYPos, target1YPos);
    let t2Collision = 52 >= getDifference(playerXPos, target2XPos, playerYPos, target2YPos);
    let t3Collision = 52 >= getDifference(playerXPos, target3XPos, playerYPos, target3YPos);
    let destCollision = 3 >= getDifference(playerXPos, lastClickX, playerYPos, lastClickY);
    
    return playerXPos < 26 || playerXPos > 374 || playerYPos < 26 || playerYPos > 574 ||
            t1Collision || t2Collision || t3Collision || destCollision;
}

function getDifference(x1, x2, y1, y2) {
    let diffX = x1 - x2;
    let diffY = y1 - y2;
    let diff = Math.sqrt(diffX * diffX + diffY * diffY);

    return diff;
}