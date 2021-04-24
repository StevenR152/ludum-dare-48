var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;

Crafty.defineScene("Game", function() {
	
	// var redSquare = Crafty.e('2D, DOM, Color')
	// 	.attr({x: 0, y: 0, w: 100, h: 100})
	// 	.color('#F00');
Crafty.viewport.scale(0.2);
	var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
	for (var y = 0; y < 20; y++) {
		for (var x = 0; x < 20; x++) {
			isos.place(Crafty.e('2D, DOM, Color, tile').attr({w:TILE_WIDTH, h:TILE_HEIGHT}),x+10,y,0);
		}
	}
});