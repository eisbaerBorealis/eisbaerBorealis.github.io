var svgPosX, svgPosY, origSvgHeight, origSvgWidth;
var zoom = 1.0;

function buildMapSVG() {
    console.log('    eisDEBUG: building SVG...');

    // precalculations for svg size
    let maxWidth = buildings[0].width;
    let minHeight = buildings[0].height;
    let totalHeight = buildings[0].height;
    for(let i = 1; i < buildings.length; i++) {
        if(maxWidth < buildings[i].width) {maxWidth = buildings[i].width;}
        if(minHeight > buildings[i].height) {minHeight = buildings[i].height;}
        totalHeight += buildings[i].height;
    }
    let border = Math.round((maxWidth * 0.05) / 5) * 5;
    console.log('      eisDEBUG: maxWidth is ' + maxWidth);
    console.log('      eisDEBUG: minHeight is ' + minHeight);
    // totalHeight += (buildings.length - 1) * minHeight + border * 2;
    totalHeight += (buildings.length - 1) * border * 2 + border * 2;
    let totalWidth = maxWidth + border * 2;
    console.log('      eisDEBUG: border is ' + border);
    console.log('      eisDEBUG: totalHeight is ' + totalHeight);
    console.log('      eisDEBUG: totalWidth is ' + totalWidth);
    
    let xOffsets = [];
    let yOffsets = [];
    let buildingsTotalHeight = 0;
    for(let i = 0; i < buildings.length; i++) {
        xOffsets.push(border + (maxWidth - buildings[i].width) / 2);
        // yOffsets.push(border + buildingsTotalHeight + minHeight * i);
        yOffsets.push(border + buildingsTotalHeight + border * 2 * i);
        buildingsTotalHeight += buildings[i].height;
    }
    console.log('        eisDEBUG: xOffsets is ' + xOffsets);
    console.log('        eisDEBUG: yOffsets is ' + yOffsets);


    // build svg and give full white background
    let svgHTML = '<svg id="svg-map" viewBox="0 0 ' + totalWidth + ' ' + totalHeight + '" height="' + totalHeight + '">\n';
        svgHTML += '  <rect width="100%" height="100%" fill="#ffffff" />\n';
    
    // add the "other"
    for(let i = 0; i < buildings.length; i++) {
        let otherAreas = buildings[i].parts.otherAreas;
        for(let j = 0; j < otherAreas.length; j++) {
            let area = otherAreas[j];
            svgHTML += '  <rect class="svg-other" id="' + area.name + '" x="' + (area.startX + xOffsets[i]) + '"' +
                    ' y="' + (area.startY + yOffsets[i]) + '" width="' + area.width + '" height="' + area.height + '" />';
        }
    }

    // add the racks
    for(let i = 0; i < buildings.length; i++) {
        let rackWidth = buildings[i].parts.racking.width;
        let rackDepth = buildings[i].parts.racking.depth;
        let aisleDirection = buildings[i].parts.racking.direction;
        
        let xMod = 0;
        let yMod = 0;
        if(aisleDirection === 'vertical') {
            yMod = 1;
        } else {
            xMod = 1;
        }

        let orientMod = 1;
        if(buildings[i].parts.racking.order === 'desc') {
            orientMod = -1;
        }

        let aisles = buildings[i].parts.racking.aisles;
        for(let j = 0; j < aisles.length; j++) {
            

            for(let k = 0; k < aisles[j].binCount; k++) {
                svgHTML += '  <rect class="svg-racks" id="' + aisles[j].name + '[A-' + String.fromCharCode(64 + aisles[j].levelCount) + ']' +
                          String(aisles[j].firstBin + orientMod * k).padStart(3, '0') + '" ';
                svgHTML += 'x="' + (aisles[j].startX + xOffsets[i] + (xMod * rackWidth * k)).toFixed(2) + '" ';
                svgHTML += 'y="' + (aisles[j].startY + yOffsets[i] + (yMod * rackWidth * k)).toFixed(2) + '" ';
                svgHTML += 'width="' + rackWidth + '" height="' + rackDepth + '" />\n';
            }
        }
    }
    svgHTML += '\n';

    // add the inner walls
    for(let i = 0; i < buildings.length; i++) {
        let walls = buildings[i].parts.innerWalls;
        for(let j = 0; j < walls.length; j++) {
            svgHTML += '\n  <path class="svg-inner" d="M ';

            let wallCoords = walls[j];
            for(let k = 0; k < wallCoords.length; k += 2) {
                wallCoords[k] = wallCoords[k] + xOffsets[i];
                wallCoords[k+1] = wallCoords[k+1] + yOffsets[i];
            }

            svgHTML += wallCoords.join(' ');
            svgHTML += '"/>';
        }
    }
    svgHTML += '\n';

    // add the outer walls
    for(let i = 0; i < buildings.length; i++) {
        svgHTML += '\n  <polygon class="svg-outer" points="';

        let wallCoords = buildings[i].parts.outerWalls;
        for(let j = 0; j < wallCoords.length; j += 2) {
            svgHTML += (wallCoords[j] + xOffsets[i]) + ',' + (wallCoords[j+1] + yOffsets[i]);
            if(j+2 < wallCoords.length) {
                svgHTML += ' ';
            }
        }
        svgHTML += '"/>';
    }
    

    // close svg
    svgHTML += '\n</svg>';

    console.log('    eisDEBUG: SVG built.');
    // console.log(svgHTML);

    // position svg container to be centered
    origSvgHeight = newSvgHeight;
    origSvgWidth = newSvgWidth;

    let bodyHeight = document.body.offsetHeight;
    let bodyWidth = document.body.offsetWidth;
    svgPosX = (bodyWidth - origSvgWidth) / 2;
    svgPosY = (bodyHeight - origSvgHeight) / 2;

    document.getElementById('svg-container').style.left = svgPosX + 'px';
    document.getElementById('svg-container').style.top = svgPosY + 'px';

    return svgHTML;
}

// super helpful: https://codepen.io/AmeliaBR/pen/MYbzwW
function resizeSVG(dZoom) {
    console.log('  eisDEBUG: resizeSVG(), old zoom is ' + zoom);
    zoom = (zoom * dZoom).toFixed(2);
    console.log('    eisDEBUG: resizeSVG(), new zoom is ' + zoom);

    let windowCenterX = (document.body.offsetWidth / 2).toFixed(0);
    let windowCenterY = (document.body.offsetHeight / 2).toFixed(0);
    console.log('      eisDEBUG: windowCenterX is ' + windowCenterX);

    let svgLeft = document.getElementById('svg-container').style.left;
    let svgTop = document.getElementById('svg-container').style.top;
    let oldSVGX = Number(svgLeft.substring(0,svgLeft.length - 2));
    let oldSVGY = Number(svgTop.substring(0,svgTop.length - 2));
    console.log('      eisDEBUG: oldSVGX is ' + oldSVGX);

    let oldXDiff = windowCenterX - oldSVGX;
    let oldYDiff = windowCenterY - oldSVGY;
    console.log('      eisDEBUG: oldXDiff is ' + oldXDiff);

    let newXDiff = (oldXDiff * dZoom).toFixed(0);
    let newYDiff = (oldYDiff * dZoom).toFixed(0);
    console.log('      eisDEBUG: newXDiff is ' + newXDiff);
    
    let newSVGX = windowCenterX - newXDiff;
    let newSVGY = windowCenterY - newYDiff;
    console.log('      eisDEBUG: newSVGX is ' + newSVGX);
    
    document.getElementById('svg-map').setAttribute('height', (origSvgHeight * zoom).toFixed(2));
    document.getElementById('svg-container').style.left = newSVGX + 'px';
    document.getElementById('svg-container').style.top = newSVGY + 'px';
}

function moveSVG(dX, dY) {
    let svgLeft = document.getElementById('svg-container').style.left;
    svgLeft = Number(svgLeft.substring(0,svgLeft.length - 2));
    let svgTop = document.getElementById('svg-container').style.top;
    svgTop = Number(svgTop.substring(0,svgTop.length - 2));
    
    document.getElementById('svg-container').style.left = svgLeft + dX + 'px';
    document.getElementById('svg-container').style.top = svgTop + dY + 'px';
}



function buildControlsSVG() {
    let sqrtTwo = Math.sqrt(2);

    svgHTML = '<svg id="svg-controls" height="220" width="220">'

    svgHTML += '<defs><linearGradient id="btnGradient" x1="0" x2="0" y1="0" y2="1">\n' +
            '<stop offset="0%"   stop-color="#bbbbbb" stop-opacity="1"/>\n' +
            '<stop offset="100%" stop-color="#666666" stop-opacity="1"/>\n' +
            '</linearGradient></defs>';

    svgHTML += '<path class="clickable btn-control" id="btn-right" ' +
                'd="M 110 110 m ' + (50 * sqrtTwo) + ' ' + (-50 * sqrtTwo) + '\n' +
                'a 100 100 0 0 1 0 ' + (100 * sqrtTwo) + '\n' +
                'l ' + (-25 * sqrtTwo) + ' ' + (-25 * sqrtTwo) + 
                ' a 50 50 0 0 0 0 ' + (-50 * sqrtTwo) + ' z"/>';

    svgHTML += '<path class="clickable btn-control" id="btn-down" ' +
                'd="M 110 110 m ' + (50 * sqrtTwo) + ' ' + (50 * sqrtTwo) + '\n' +
                'a 100 100 0 0 1 ' + (-100 * sqrtTwo) + ' 0\n' +
                'l ' + (25 * sqrtTwo) + ' ' + (-25 * sqrtTwo) + 
                ' a 50 50 0 0 0 ' + (50 * sqrtTwo) + ' 0 z"/>';

    svgHTML += '<path class="clickable btn-control" id="btn-left" ' +
                'd="M 110 110 m ' + (-50 * sqrtTwo) + ' ' + (50 * sqrtTwo) + '\n' +
                'a 100 100 0 0 1 0 ' + (-100 * sqrtTwo) + '\n' +
                'l ' + (25 * sqrtTwo) + ' ' + (25 * sqrtTwo) + 
                ' a 50 50 0 0 0 0 ' + (50 * sqrtTwo) + ' z"/>';

    svgHTML += '<path class="clickable btn-control" id="btn-up" ' +
                'd="M 110 110 m ' + (-50 * sqrtTwo) + ' ' + (-50 * sqrtTwo) + '\n' +
                'a 100 100 0 0 1 ' + (100 * sqrtTwo) + ' 0\n' +
                'l ' + (-25 * sqrtTwo) + ' ' + (25 * sqrtTwo) + 
                ' a 50 50 0 0 0 ' + (-50 * sqrtTwo) + ' 0 z"/>';

    svgHTML += '<path class="clickable btn-control" id="btn-zoom-in" ' +
                'd="M 110 110 m -50 0\n' +
                'a 50 50 0 0 1 100 0 z"/>';

    svgHTML += '<path class="clickable btn-control" id="btn-zoom-out" ' +
                'd="M 110 110 m 50 0\n' +
                'a 50 50 0 0 1 -100 0 z"/>';

    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m -80 0 m 15 15 ' +
                'l -15 -15 l 15 -15"/>';

    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m 0 -80 m -15 15 ' +
                'l 15 -15 l 15 15"/>';
                
    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m 80 0 m -15 -15 ' +
                'l 15 15 l -15 15"/>';
    
    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m 0 80 m 15 -15 ' +
                'l -15 15 l -15 -15"/>';

    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m -8 -22 ' +
                'l 16 0 m -8 -8 l 0 16"/>';

    svgHTML += '<path class="unclickable icons" ' +
                'd="M 110 110 m -8 22 ' +
                'l 16 0"/>';

    svgHTML += '</svg>';
    return svgHTML;
}