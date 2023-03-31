var RATIO = 1.732;

var mapWidth = 1;
var slowMode = false;
var hiddenGrid = false;
var mapGenerated = false;

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
      <label for="opt-width">Width: </label>
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
    <button id="download-btn" onclick="downloadMap()" disabled="">Download Map</button>
  </div>
  `;
  
  let bodyHeight = document.body.clientHeight;
  let controlHeight = document.getElementById('control-container').clientHeight;
  let mapSVGHeight = (bodyHeight - controlHeight) * 0.95;
  let mapSVGWidth = mapSVGHeight * RATIO;
  document.getElementById('map-svg').setAttribute('width', mapSVGWidth)
  document.getElementById('map-svg').setAttribute('height', mapSVGHeight)

  getColors();
  console.log('EisDebug: startup() completed.');
}

function generateMap() {
  console.log('  EisDebug: generateMap()');
  mapWidth = document.getElementById('opt-width').value;
  // slowMode = document.getElementById('opt-slow').value;

  generateMapBackground();
  generateGreenShapes();
  generateGrid();

  if(!mapGenerated) {
    mapGenerated = true;
    document.getElementById('download-btn').disabled = false;
  }
}

function generateMapBackground() {
  console.log('    EisDebug: generateMapBackground()');
  let svgHeight = mapWidth;
  let svgWidth = svgHeight * RATIO;

  document.getElementById('map-svg').setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);

  let bgPolyHTML = '<polygon points="' + (svgWidth / 2) +
    ',0 ' + svgWidth + ',' + (svgHeight / 2) + ' ' + (svgWidth / 2) +
    ',' + svgHeight + ' 0,' + (svgHeight / 2) + ' ' + (svgWidth / 2) + ',0"/>';

  document.getElementById('svg-background').innerHTML = bgPolyHTML;
}

function generateGreenShapes() {
  let options = [0];
  let greenShapesHTML = '';
  for(let i = 0; i < mapWidth; i++) {
    for(let j = 0; j < mapWidth; j++) {
      let optionChoice = Math.floor(Math.random() * options.length);

      let xOffSet = (mapWidth / 2 - 0.5) * RATIO + RATIO / 2 * (j - i);
      let yOffSet = (i + j) / 2;

      switch(optionChoice) {
        case 0:
          greenShapesHTML += generateTile0(xOffSet, yOffSet);
          break;
        default:
          console.log('ERROR: default in switch 1 in generateGreenShapes()');
      }

    }
  }
  greenShapesHTML += '\n';
  document.getElementById('svg-green').innerHTML = greenShapesHTML;
}
  
function generateGrid() {
  console.log('    EisDebug: generateGrid()');
  let midX = mapWidth * RATIO / 2;
  let midY = mapWidth / 2;

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

function downloadMap() {
  let downloadText = document.getElementById('svg-container').innerHTML;
  let gridStart = downloadText.indexOf('<g id="svg-grid"');
  downloadText = downloadText.slice(0, gridStart) + '</svg>';
  // console.log('\n\n  downloadText is:\n' + downloadText);

  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(downloadText));
  element.setAttribute('download', 'map.svg');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}