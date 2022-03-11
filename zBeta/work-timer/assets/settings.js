const TICKS_PER_SEC = 40;
const ANIM_SECS = 1;
const ANIM_LENGTH = ANIM_SECS * TICKS_PER_SEC;
var fast_mode = false;

const RING_RADIUS_DELTA = 15.0;
const RING_RADIUS_DELTA_PER = RING_RADIUS_DELTA / ANIM_LENGTH;
const RING_WIDTH_DELTA = 30.0;
const RING_WIDTH_DELTA_PER = RING_WIDTH_DELTA / ANIM_LENGTH;

const RING_RADS = [315, 300, 285, 270, 255, 240, 225, 210, 195, 180];

const S_HAND_LG = 93;
const S_HAND_ST = 10;
const M_HAND_LG = 80;
const M_HAND_ST = 20;
const H_HAND_LG = 50;
const H_HAND_ST = 15;

// Check with style.css to match!
const SM_CLK_X = 725;
const SM_CLK_Y = SM_CLK_X;

// const SM_CLK_X = Number(getComputedStyle(document.documentElement).getPropertyValue('--sm-clock-center-x'));
// const SM_CLK_Y = Number(getComputedStyle(document.documentElement).getPropertyValue('--sm-clock-center-y'));

const TWO_PI = 2 * Math.PI;

var debugOnce = false;