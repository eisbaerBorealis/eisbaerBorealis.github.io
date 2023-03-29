var RATIO = 1.732;

var mapWidth = 1;
var mapHeight = 1;
var slowMode = false;
var hiddenGrid = false;

(function() {
	'use strict';

	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
      console.log('EisDEBUG: Start main js');
      startup();
      clearInterval(stateCheck);
		}
	}, 100);
})();

function startup() {
  console.log('EisDebug: startup() started.');
  document.getElementById('control-container').innerHTML =
  `
  <div id="options">
    <div>
      <label for="opt-height">Height (North-South): </label>
        <input type="number" id="opt-height" value="5" style="width: 50px;"><br>
    </div>
    <div>
      <label for="opt-width">Width (East-West): </label>
        <input type="number" id="opt-width" value="5" style="width: 50px;">
    </div>
  </div>
  <div id="generate">
    <!--<div>
      <input type="checkbox" id="opt-slow">
        <label for="opt-slow">Slow Mode</label><br>
    </div> -->
    <button id="gen-btn" onclick="generateMap()">Generate Map</button>
    <button id="hide-btn" onclick="toggleGrid()">Hide Grid</button>
  </div>
  `;
  
  let bodyHeight = document.body.clientHeight;
  let controlHeight = document.getElementById('control-container').clientHeight;
  let mapSVGHeight = (bodyHeight - controlHeight) * 0.9;
  let mapSVGWidth = mapSVGHeight * RATIO;
  document.getElementById('map-svg').setAttribute('width', mapSVGWidth)
  document.getElementById('map-svg').setAttribute('height', mapSVGHeight)
  console.log('EisDebug: startup() completed.');
}

function generateMap() {
  console.log('  EisDebug: generateMap()');
  mapHeight = document.getElementById('opt-height').value;
  mapWidth = document.getElementById('opt-width').value;
  // slowMode = document.getElementById('opt-slow').value;

  generateMapBackground();
  generateGreenShapes();
  generateGrid();
}

function generateMapBackground() {
  console.log('    EisDebug: generateMapBackground()');
  let maxSide = Math.max(mapWidth, mapHeight);
  let svgHeight = maxSide;
  let svgWidth = svgHeight * RATIO;

  document.getElementById('map-svg').setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);

  let bgPolyHTML = '<polygon points="' + (svgWidth / 2) +
    ',0 ' + svgWidth + ',' + (svgHeight / 2) + ' ' + (svgWidth / 2) +
    ',' + svgHeight + ' 0,' + (svgHeight / 2) + ' ' + (svgWidth / 2) + ',0"/>';

  document.getElementById('svg-background').innerHTML = bgPolyHTML;
}

function generateGreenShapes() {
  let greenShapesHTML = '';
  for(let i = 0; i < mapWidth; i++) {
    for(let j = 0; j < mapHeight; j++) {
      // console.log('  EisDEBUG: i is ' + i + ', j is ' + j);

      let xOffSet = (mapWidth / 2 - 0.5) * RATIO + RATIO / 2 * (j - i);
      let yOffSet = (i + j) / 2;

      // choose center point
      let point1X = roundTo(0.577 * Math.random() + 0.577, 3);
      let point1Y = roundTo(0.333 * Math.random() + 0.333, 3);
      
      let edge1 = Math.floor(Math.random() * 4);
      // console.log('    EisDEBUG: edge1 is ' + edge1);
      let point2Y = roundTo(0.167 * Math.random() + 0.167, 3);
      // if(Math.abs(point2Y - 0.25) < 0.01) {
      //   console.log('  EisDEBUG: i is ' + i + ', j is ' + j);
      //   console.log('      EisDEBUG: point2Y - 0.25 is ' + (point2Y - 0.25));
      //   point2Y = roundTo(0.167 * Math.random() + 0.167, 3);
      // }
      if(point2Y === 0.25) {
          console.log('  EisDEBUG: i is ' + i + ', j is ' + j);
          console.log('      EisDEBUG: point2Y is ' + point2Y);
          while(point2Y === 0.25) {
            point2Y = roundTo(0.333 * Math.random() + 0.333, 3);
            console.log('      EisDEBUG: new point2Y is ' + point2Y);
          }
      }
      let point2X = point2Y * RATIO;

      switch(edge1) {
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
      if(point2X < RATIO / 4 || point2X > RATIO / 4 * 3) {
        point3X = RATIO / 2
      } else if(point2X > RATIO / 2) {
        point3X = 0;
      } // else, point3X = RATIO

      let point3Y = 1;
      if(point2Y < 0.25 || point2Y > 0.75) {
        point3Y = 0.5;
      } else if(point2Y > 0.5) {
        point3Y = 0;
      } // else, point3Y = 1

      let point4X, point4Y;
      if(point3X !== RATIO / 2) {
        point4X = RATIO / 2;
        if(point2Y > 0.5) {
          point4Y = 1;
        } else {
          point4Y = 0;
        }
      } else { // point3X === RATIO / 2
        point4Y = 0.5;
        if(point2X > RATIO / 2) {
          point4X = RATIO;
        } else {
          point4X = 0;
        }
      }

      // point 5 opposite point 3, point 6 opposite point 4
      let point5X, point5Y, point6X, point6Y;
      if(point3X === RATIO / 2) {
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

      point1X += xOffSet;
      point2X += xOffSet;
      point3X += xOffSet;
      point4X += xOffSet;
      point5X += xOffSet;
      point6X += xOffSet;

      point1Y += yOffSet;
      point2Y += yOffSet;
      point3Y += yOffSet;
      point4Y += yOffSet;
      point5Y += yOffSet;
      point6Y += yOffSet;

      let colors = [0,1,2,3,4,5,6,7]

      let nextColorNum = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
      let nextColor = '--green-main';
      if(nextColorNum !== 0) {
        nextColor = '--green' + nextColorNum;
      }
      greenShapesHTML += '<polygon points="' + point2X + ',' + point2Y + ' ' +
                        point3X + ',' + point3Y + ' ' + point4X + ',' + point4Y +
                        '" style="fill:var(' + nextColor + ');stroke-width:0"/>';

      nextColorNum = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
      nextColor = '--green-main';
      if(nextColorNum !== 0) {
        nextColor = '--green' + nextColorNum;
      }
      greenShapesHTML += '<polygon points="' + point1X + ',' + point1Y + ' ' +
                        point2X + ',' + point2Y + ' ' + point3X + ',' + point3Y +
                        '" style="fill:var(' + nextColor + ');stroke-width:0"/>';

      nextColorNum = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
      nextColor = '--green-main';
      if(nextColorNum !== 0) {
      nextColor = '--green' + nextColorNum;
      }
      greenShapesHTML += '<polygon points="' + point1X + ',' + point1Y + ' ' +
                      point2X + ',' + point2Y + ' ' + point5X + ',' + point5Y +
                      '" style="fill:var(' + nextColor + ');stroke-width:0"/>';

      nextColorNum = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
      nextColor = '--green-main';
      if(nextColorNum !== 0) {
        nextColor = '--green' + nextColorNum;
      }
      greenShapesHTML += '<polygon points="' + point1X + ',' + point1Y + ' ' +
                        point3X + ',' + point3Y + ' ' + point6X + ',' + point6Y +
                        '" style="fill:var(' + nextColor + ');stroke-width:0"/>';

      nextColorNum = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
      nextColor = '--green-main';
      if(nextColorNum !== 0) {
        nextColor = '--green' + nextColorNum;
      }
      greenShapesHTML += '<polygon points="' + point1X + ',' + point1Y + ' ' +
                        point5X + ',' + point5Y + ' ' + point6X + ',' + point6Y +
                        '" style="fill:var(' + nextColor + ');stroke-width:0"/>';
      // DEBUG ZONE //
      /*
      let debugHTML = '';
      debugHTML += '<circle cx="' + point1X + '" cy="' + point1Y + '" r="0.05" fill="#ff0000aa" />';
      debugHTML += '<circle cx="' + point2X + '" cy="' + point2Y + '" r="0.05" fill="#ffff00aa" />';
      debugHTML += '<circle cx="' + point3X + '" cy="' + point3Y + '" r="0.05" fill="#0000ffaa" />';
      debugHTML += '<circle cx="' + point4X + '" cy="' + point4Y + '" r="0.05" fill="#ffffffaa" />';
      debugHTML += '<circle cx="' + point5X + '" cy="' + point5Y + '" r="0.05" fill="#ff8000aa" />';
      debugHTML += '<circle cx="' + point6X + '" cy="' + point6Y + '" r="0.05" fill="#000000aa" />';
      document.getElementById('svg-debug').innerHTML = debugHTML;
      //////////////*/

    }
  }
  document.getElementById('svg-green').innerHTML = greenShapesHTML;
}

function debugGreenShapes() {
  
}

function generateGrid() {
  console.log('    EisDebug: generateGrid()');
  let midX = mapWidth * RATIO / 2;
  let midY = mapHeight / 2;

  let gridHTML = '';
  for(let i = 1; i < mapWidth; i++) {
    let line1 = '<line x1="' + (i * RATIO / 2) + '" y1="';
    let line2 = line1;

    line1 += (midY - i / 2) + '" x2="';
    line2 += (midY + i / 2) + '" x2="';

    line1 += (midX + i * RATIO / 2) + '" y2="';
    line2 += (midX + i * RATIO / 2) + '" y2="';

    line1 += (midY + (mapWidth - i) / 2) + '"/>';
    line2 += (midY - (mapWidth - i) / 2) + '"/>';

    gridHTML += line1 + '\n' + line2;
    if(i + 1 !== mapWidth) {
      gridHTML += '\n';
    }
  }
  // console.log('    EisDebug: gridHTML is\n' + gridHTML);
  document.getElementById('svg-grid').innerHTML = gridHTML;
}

function toggleGrid() {
  hiddenGrid = !hiddenGrid;
  console.log('  EisDebug: toggleGrid(), hiddenGrid is now ' + hiddenGrid);
  
  let buttonText = '';

  if(hiddenGrid) {
    buttonText = 'Show';
    document.getElementById('svg-grid').setAttribute('opacity', 0);
  } else {
    buttonText = 'Hide';
    document.getElementById('svg-grid').setAttribute('opacity', 0.5);
  }

  buttonText += ' Grid';
  document.getElementById('hide-btn').innerText = buttonText;
}

function roundTo(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}