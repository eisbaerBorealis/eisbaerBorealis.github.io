var zLevel = 0;

var images =   ['1_aspect.png',
                '2_elevation.png',
                '3_ruggedness.png',
                '4_class.png',
                '5_distance_to_dirt_roads.png',
                '6_distance_to_power_lines.png'];
var titles =   ['Aspect',
                'Elevation',
                'Ruggedness',
                'Land Classification',
                'Distance to Dirt Roads',
                'Distance to PowerLines'];

(function() {
    'use strict';

    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(stateCheck);
            startup();
        }
    }, 100);
})();

function startup() {
    let htmlText = '';

    for(let i = 0; i < images.length; i++) {
        // htmlText += i;
        let layerText = '<div class="layer"><div class="image" ';
        layerText += 'style="background-image: url(\'images/' + images[i] + '\'); z-index: ' + zLevel + '"></div>';
        zLevel--;
        layerText += '<div class="title">' + titles[i] + '</div></div>';

        htmlText += layerText;
    }

    document.body.innerHTML = htmlText;
}