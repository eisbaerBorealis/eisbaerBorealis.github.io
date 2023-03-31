var colorNames;

function getColors() {
  colorNames = document.getElementById("map-svg").children[0].innerHTML
            .split(/\s+/g)
            .filter(function (str) { return /--[^:]+/g.test(str); })
            .map(function(str) { return str.slice(0, -1) });

  console.log('  EisDEBUG: colorNames are \'' + colorNames.join('\', \'') + '\'');
}

function generateTile0(xOffSet, yOffSet) {
  let isGoodTile = false;
  let returnHTML;

  while(!isGoodTile) {
    isGoodTile = true;
    returnHTML = '';

    let point1X = roundTo(0.577 * Math.random() + 0.577, 3);
    let point1Y = roundTo(0.333 * Math.random() + 0.333, 3);

    let edge1 = Math.floor(Math.random() * 4);
    let point2Y = roundTo(0.167 * Math.random() + 0.167, 3);
    if (point2Y === 0.25) {
      while (point2Y === 0.25) {
        point2Y = roundTo(0.167 * Math.random() + 0.167, 3);
        console.log('      EisDEBUG: new point2Y is ' + point2Y);
      }
    }
    let point2X = point2Y * RATIO;

    switch (edge1) {
      case 0:
        point2X += RATIO / 2;
        break;
      case 1:
        point2Y = 1 - point2Y;
        point2X += RATIO / 2;
        break;
      case 2:
        point2Y = 1 - point2Y;
        point2X = RATIO / 2 - point2X;
        break;
      case 3:
        point2X = RATIO / 2 - point2X;
        break;
      default:
        console.log('ERROR: default in switch 1 in generateGreenShapes()');
    }

    let point3X = RATIO;
    if (point2X < RATIO / 4 || point2X > RATIO / 4 * 3) {
      point3X = RATIO / 2
    } else if (point2X > RATIO / 2) {
      point3X = 0;
    } // else, point3X = RATIO

    let point3Y = 1;
    if (point2Y < 0.25 || point2Y > 0.75) {
      point3Y = 0.5;
    } else if (point2Y > 0.5) {
      point3Y = 0;
    } // else, point3Y = 1

    let angle1 = Math.atan((point1Y - point2Y) / (point1X - point2X));
    let angle2 = Math.atan((point1Y - point3Y) / (point1X - point3X));
    // console.log('    EisDEBUG: angle1 is ' + roundTo(angle1, 3) +
    //             ' and angle2 is ' + roundTo(angle2, 3) +
    //             ' and diff is ' + roundTo(Math.abs(angle2 - angle1), 3));

    if(Math.abs(angle1 - angle2) < 1.0) {
      isGoodTile = false;
    }

    if(isGoodTile) {
      let point4X, point4Y;
      if (point3X !== RATIO / 2) {
        point4X = RATIO / 2;
        if (point2Y > 0.5) {
          point4Y = 1;
        } else {
          point4Y = 0;
        }
      } else { // point3X === RATIO / 2
        point4Y = 0.5;
        if (point2X > RATIO / 2) {
          point4X = RATIO;
        } else {
          point4X = 0;
        }
      }

      // point 5 opposite point 3, point 6 opposite point 4
      let point5X, point5Y, point6X, point6Y;
      if (point3X === RATIO / 2) {
        point5X = point3X;
        point5Y = 1 - point3Y;
        point6X = RATIO - point4X;
        point6Y = point4Y;
      } else {
        point5X = RATIO - point3X;
        point5Y = point3Y;
        point6X = point4X;
        point6Y = 1 - point4Y;
      }

      // point1X += xOffSet;
      // point2X += xOffSet;
      // point3X += xOffSet;
      // point4X += xOffSet;
      // point5X += xOffSet;
      // point6X += xOffSet;

      // point1Y += yOffSet;
      // point2Y += yOffSet;
      // point3Y += yOffSet;
      // point4Y += yOffSet;
      // point5Y += yOffSet;
      // point6Y += yOffSet;

      point1X = roundTo(point1X + xOffSet, 3);
      point2X = roundTo(point2X + xOffSet, 3);
      point3X = roundTo(point3X + xOffSet, 3);
      point4X = roundTo(point4X + xOffSet, 3);
      point5X = roundTo(point5X + xOffSet, 3);
      point6X = roundTo(point6X + xOffSet, 3);

      point1Y = roundTo(point1Y + yOffSet, 3);
      point2Y = roundTo(point2Y + yOffSet, 3);
      point3Y = roundTo(point3Y + yOffSet, 3);
      point4Y = roundTo(point4Y + yOffSet, 3);
      point5Y = roundTo(point5Y + yOffSet, 3);
      point6Y = roundTo(point6Y + yOffSet, 3);

      let colorNums = [0, 1, 2, 3, 4, 5, 6, 7]

      let nextColorNum = colorNums.splice(Math.floor(Math.random() * colorNums.length), 1)[0];
      let nextColor = colorNames[nextColorNum];
      returnHTML += `\n\t\t<polygon points="${point2X},${point2Y} ${point3X},${point3Y} ` +
                    `${point4X},${point4Y}" style="fill:var(${nextColor});"/>`;

      nextColorNum = colorNums.splice(Math.floor(Math.random() * colorNums.length), 1)[0];
      nextColor = colorNames[nextColorNum];
      returnHTML += `\n\t\t<polygon points="${point1X},${point1Y} ${point2X},${point2Y} ` +
                    `${point3X},${point3Y}" style="fill:var(${nextColor});"/>`;

      nextColorNum = colorNums.splice(Math.floor(Math.random() * colorNums.length), 1)[0];
      nextColor = colorNames[nextColorNum];
      returnHTML += `\n\t\t<polygon points="${point1X},${point1Y} ${point2X},${point2Y} ` +
                    `${point5X},${point5Y}" style="fill:var(${nextColor});"/>`;

      nextColorNum = colorNums.splice(Math.floor(Math.random() * colorNums.length), 1)[0];
      nextColor = colorNames[nextColorNum];
      returnHTML += `\n\t\t<polygon points="${point1X},${point1Y} ${point3X},${point3Y} ` +
                    `${point6X},${point6Y}" style="fill:var(${nextColor});"/>`;

      nextColorNum = colorNums.splice(Math.floor(Math.random() * colorNums.length), 1)[0];
      nextColor = colorNames[nextColorNum];
      returnHTML += `\n\t\t<polygon points="${point1X},${point1Y} ${point5X},${point5Y} ` +
                    `${point6X},${point6Y}" style="fill:var(${nextColor});"/>`;
    }
  }

  return returnHTML;
}