var ROW_COUNT = 12;
var BLOCK_COUNT = 7;
var STRIP_COUNT = 8;
var origStrips = [];
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
  mixStrips();
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
    // console.log('  EisDebug: strip length of ' + i);
    let fabrics = 6;
    if(i === 6.5) {
      fabrics = 8;
    }

    for(let j = 0; j < fabrics; j++) {
      code = String.fromCharCode(65 + j);
      for(let k = 0; k < 10; k++) {
        origStrips.push({
          'length': i,
          'type': code
        });
      }
//      console.log('    EisDebug: added ten strips of length ' + i + ' and type ' + code);
    }
    // console.log('      EisDebug: origStrips.length is ' + origStrips.length);
  }
}

function mixStrips() {
  let len = origStrips.length;
  
  for(let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * origStrips.length);

    strips.push(origStrips[rand]);
    origStrips.splice(rand, 1);
  }

  let checks = 0;
  let swaps = 0;

  var STRIP_PER_ROW = BLOCK_COUNT * STRIP_COUNT;
  var stripLen = strips.length;
  let mistakes = 1;
  while(mistakes > 0) {
    mistakes = 0;
    for(let i = 0; i < ROW_COUNT; i++) {
      let offset = STRIP_PER_ROW * i;
      // console.log('EisDebug: offset is ' + offset);
      for(let j = 0; j < STRIP_PER_ROW - 1; j++) {
        let current = offset + j;
        if(strips[current].length === strips[current + 1].length) {
          // console.log('EisDebug: found length match at row ' + (i + 1) + ', strip ' + (j + 1));
          // console.log('  EisDebug: match: ' + strips[offset + j].length + ' and ' + strips[offset + j + 1].length);
          mistakes++;

          let fixed = false;
          while(!fixed) {
            let rand = Math.floor(Math.random() * stripLen);
            checks++;
            if((rand > 0 && strips[current].length === strips[rand - 1].length) ||
               (rand < stripLen - 1 && strips[current].length === strips[rand + 1].length) ||
               (current > 0 && strips[rand].length === strips[current - 1].length) ||
               (current < stripLen - 1 && strips[rand].length === strips[current + 1].length)) {
              console.log('EisDebug: match found (bad).')
            } else {
              let temp = strips[rand];
              strips[rand] = strips[current];
              strips[current] = temp;
              swaps++;
              fixed = true;
            }

          }
        }
      }
    }
    console.log('    EisDebug: ' + mistakes + ' mistakes found.');
  }
  console.log('  EisDebug: made ' + checks + ' checks and ' + swaps + ' swaps.');
}

// ¼ ½ ¾ // String.fromCharCode, 188 to 190
function populateBlocks() {
  console.log('EisDebug: populateBlocks() started.');
  let stripDivs = document.getElementsByClassName('strip-container');

  console.log('EisDebug: strips.length is ' + strips.length);
  for(let i = 0; i < stripDivs.length; i++) {
    let len = strips[i].length;
    let type = strips[i].type;
    let class1 = 'l-' + (len * 100);
    let class2 = 'l-' + ((8 - len) * 100)

    let newHTML = '<div class="' + class2 + '"></div>';
    newHTML += '<div class="color-strip ' + class1 + '">';
    newHTML += type + '</br>' + len.toFixed(2);
    newHTML += '</div>';

    stripDivs[i].innerHTML = newHTML;
  }
  console.log('EisDebug: strips.length is ' + strips.length);  
}




