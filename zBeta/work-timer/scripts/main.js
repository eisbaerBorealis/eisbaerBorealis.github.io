(function() {
    'use strict';

    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            console.log('  eisDEBUG: document ready')
            clearInterval(stateCheck);
            startup();
        }
    }, 100);
})();

function startup() {
    console.log('  eisDEBUG: startup()');
    // console.log('  eisDEBUG: check for digitalFont: ' + document.fonts.check("30px digitalFont"));
    // addButtons();
    startEngine();
}