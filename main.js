//Utility.js eventually...
function isObjectNotNull(object) {
	return typeof object !== 'undefined';
}

Crafty.init(GAME_SCREEN_WIDTH,GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Loading");
