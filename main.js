var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 600;
var numberOfResets = 0;

screenComponentsGame = {}
var pos = jQuery("#cr-stage").position();

jQuery("#game").css( { position: "absolute", top: 0, left: 0,
	"z-index": 999 });
screenComponentsGame.darkscreen = document.getElementById('game');
screenComponentsGame.darkscreen.width = GAME_SCREEN_WIDTH;
screenComponentsGame.darkscreen.height = GAME_SCREEN_HEIGHT;
var ctxDark = screenComponentsGame.darkscreen.getContext('2d');
ctxDark.fillStyle = "rgba(80, 80, 80, .8)";
ctxDark.fillRect(0, 0, screenComponentsGame.darkscreen.width, screenComponentsGame.darkscreen.height);


Crafty.init(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT);

Crafty.scene("Loading");
