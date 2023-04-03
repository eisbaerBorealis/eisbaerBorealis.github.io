var currentTitle, currentNum, nextTitle, nextNum, nextSelectedNum;
var audio = [];

(function() {
	'use strict';

	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      console.log('EisDEBUG: Start main js');
      startup();
		}
	}, 100);
})();

function startup() {
  console.log('EisDEBUG: startup() started.');

  loadTable();
  prepareAudio();

  currentNum = -1;
  nextNum = 0;
  nextTitle = musicData[nextNum].title;
  nextSelectedNum = -1;
  document.getElementsByClassName('table-row-container')[nextNum].children[0].children[0].classList.add('next-cell');
  
  document.getElementById('controls-container').innerHTML =
          `<button id="begin-btn" onclick="playNext()">Begin</button>`;

  console.log('EisDEBUG: startup() completed.');
}

function loadTable() {
  console.log('  EisDEBUG: loadTable() started.');
  let tableHTML = '';

  for(let i = 0; i < musicData.length; i++) {
    tableHTML += '\n<div class="table-row-container">' +
      '\n  <div class="table-cells-container">' +
      '\n    <div class="table-cell">' + musicData[i].title + '</div>' +
      '\n  </div>' +
      '\n  <div class="table-cells-container">';

    for(let j = 0; j < musicData[i].next.length; j++) {
      tableHTML += '\n    <div class="table-cell">' + musicData[i].next[j] + '</div>';
    }
    if(musicData[i].next.length === 0) {
      tableHTML += '\n    <div class="table-cell">(end)</div>';
    }
    
    tableHTML += '\n  </div>\n</div>'; // close table-cells-container and table-row-container
  }

  // tableHTML += '</div>'; // close... wait

  document.getElementById('table-container').innerHTML = tableHTML;
  console.log('  EisDEBUG: loadTable() completed.');
}

function prepareAudio() {
  console.log('  EisDEBUG: prepareAudio() started; musicData.length is ' + musicData.length);
  for(let i = 0; i < musicData.length; i++) {
    audio.push(new Audio('assets/audio-clips/' + musicData[i].file));
    audio[i].addEventListener('ended', playNext);
  }
  console.log('  EisDEBUG: prepareAudio() completed; audio.length is ' + audio.length);
}

function playNext() {
  console.log('  EisDEBUG: playNext(); nextNum is ' + nextNum);

  if(nextNum === -1) {
    console.log('  EisDEBUG: song ended.');
    nextNum = 0;
    nextTitle = musicData[nextNum].title;
    nextSelectedNum = -1;
    document.getElementsByClassName('table-row-container')[currentNum].children[0].children[0].classList.remove('current-cell');
    document.getElementsByClassName('table-row-container')[nextNum].children[0].children[0].classList.add('next-cell');
  } else {
    audio[nextNum].play();
    console.log('    EisDEBUG: playing track ' + nextNum);

    // decolor
    document.getElementsByClassName('table-row-container')[nextNum].children[0].children[0].classList.remove('next-cell');
    if(nextSelectedNum !== -1) {
      document.getElementsByClassName('table-row-container')[currentNum].children[1].children[nextSelectedNum].classList.remove('next-cell');
    }
    if(currentNum !== -1) {
      document.getElementsByClassName('table-row-container')[currentNum].children[0].children[0].classList.remove('current-cell');
    }

    currentTitle = nextTitle;
    currentNum = nextNum;
    document.getElementsByClassName('table-row-container')[currentNum].children[0].children[0].classList.add('current-cell');

    if(musicData[nextNum].next.length === 0) {
      console.log('  EisDEBUG: no next song.');
      document.getElementsByClassName('table-row-container')[currentNum].children[1].children[0].classList.add('end-cell');
      nextNum = -1;
    } else {
      // choose next
      nextSelectedNum = Math.floor(Math.random() * musicData[currentNum].next.length);
      nextTitle = musicData[currentNum].next[nextSelectedNum];

      for(let i = 0; i < musicData.length; i++) {
        // console.log(`      EisDEBUG: musicData[${i}].title is ${musicData[i].title}`);
        if(musicData[i].title == nextTitle) {
          // console.log(`    EisDEBUG: found that musicData[${i}].title is ${musicData[i].title} and matches nextTitle`);
          nextNum = i;
          i = musicData.length;
        }
      }

      if(nextNum === currentNum) {
        console.log('    EisDEBUG: track repeats');
      } else {
        audio[nextNum].load();
      }
      console.log(`    EisDEBUG: currentNum is ${currentNum}, currentTitle is ${currentTitle}, ` +
                  `nextNum is ${nextNum}, nextTitle is ${nextTitle}, and nextSelectedNum is ${nextSelectedNum}`);

      // color
      document.getElementsByClassName('table-row-container')[nextNum].children[0].children[0].classList.add('next-cell');
      document.getElementsByClassName('table-row-container')[currentNum].children[1].children[nextSelectedNum].classList.add('next-cell');
    }
  }
}