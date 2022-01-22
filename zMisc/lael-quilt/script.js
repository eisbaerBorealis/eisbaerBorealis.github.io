var ROW_COUNT = 12;
var BLOCK_COUNT = 7;
var STRIP_COUNT = 8;
var strips = [];

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
  document.getElementById('main-container').innerHTML = 'changed';
  setupDivs();
  initStrips();
  populateBlocks();
}

function setupDivs() {
  console.log('EisDebug: setupDivs() started.');
  
  let newHTML = '';
  for(let i = 0; i < ROW_COUNT; i++) {
    newHTML += '<div class="row-container">';
    
    for(let j = 0; j < BLOCK_COUNT; j++) {
      newHTML += '<div class="block-container">';
      
      for(let k = 0; k < STRIP_COUNT; k++) {
        newHTML += '<div class="strip-container">';
        newHTML += '</div>';
      }
      
      newHTML += '</div>';
    }
   
    newHTML += '</div>';
  }
  
  document.getElementById('main-container').innerHTML = newHTML;
}

function initStrips() {
  console.log('EisDebug: initStrips() started.');
  for (let i = 5.0; i <= 7.5; i += 0.25) {
    console.log('  EisDebug: strip length of ' + i);
    let fabrics = 6;
    if(i === 6.5) {
      fabrics = 8;
    }

    for(let j = 0; j < fabrics; j++) {
      code = String.fromCharCode(65 + j);
      for(let k = 0; k < 10; k++) {
        strips.push({
          'length': i,
          'type': code
        });
      }
//      console.log('    EisDebug: added ten strips of length ' + i + ' and type ' + code);
    }
    console.log('      EisDebug: strips.length is ' + strips.length);
  }
}

// ¼ ½ ¾ // String.fromCharCode, 188 to 190
function populateBlocks() {
  console.log('EisDebug: populateBlocks() started.');
  let stripDivs = document.getElementsByClassName('strip-container');

  console.log('EisDebug: strips.length is ' + strips.length);
  for(let i = 0; i < stripDivs.length; i++) {
    let rand = Math.floor(Math.random() * strips.length);
    let len = strips[rand].length;
    let type = strips[rand].type;
    let class1 = 'l-' + (len * 100);
    let class2 = 'l-' + ((8 - len) * 100)

    let newHTML = '<div class="' + class2 + '"></div>';
    newHTML += '<div class="color-strip ' + class1 + '">';
    newHTML += type + '</br>' + len.toFixed(2);
    newHTML += '</div>';

    stripDivs[i].innerHTML = newHTML;

    strips.splice(rand, 1);
  }
  console.log('EisDebug: strips.length is ' + strips.length);  
}




