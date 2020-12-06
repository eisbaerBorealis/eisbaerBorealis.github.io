const MAX_STR = 5;

var gameTicks = 0;
var playerXPos = 200;
var playerYPos = 250;
var playerGrab = null;
var playerXStr = 0;
var playerYStr = 0;

var target1XPos = 50;
var target1YPos = 550;
var target1AI = 'neutral';
var target1Attract = -50;
var target1XStr = 0;
var target1YStr = 0;

var target2XPos = 200;
var target2YPos = 550;
var target2AI = 'neutral';
var target2Attract = -50;
var target2XStr = 0;
var target2YStr = 0;

var target3XPos = 350;
var target3YPos = 550;
var target3AI = 'neutral';
var target3Attract = -50;
var target3XStr = 0;
var target3YStr = 0;

var rope1XPos = 50;
var rope1YPos = 350;
var rope1Color = 'red';
var rope2XPos = 200;
var rope2YPos = 350;
var rope2Color = 'red';
var rope3XPos = 350;
var rope3YPos = 350;
var rope3Color = 'red';

var successes = 0;
var lastClickX = -1;
var lastClickY = -1;
var newLastClick = false;
var boost = false;

var introText = ['The point of this game is to simulate',
                 'changing people\'s minds. You want to',
                 'convince people by bringing them over',
                 'to your side, literally in this case.',
                 'You are the green circle. Click on',
                 'the screen to move to that location.',
                 'Try to get the red circles onto your',
                 'side. You can grab the circles',
                 'themselves or the ropes which are',
                 'attached to them with the "GRAB"',
                 'button at the top.',
                 '',
                 'Click anywhere to begin. Good luck!']