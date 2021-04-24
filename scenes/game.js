var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;

Crafty.defineScene("Game", function() {
	Crafty.viewport.scale(0.2);

	var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
	var ground = '2D, DOM, Color, tile';
	var sand = '2D, DOM, Color, tile';

	var tileMap = {
		1 : ground,
		2 : sand
	}


	var map = [
		[
			[1,0,0,0,0,0,0,0,0,1,1,1],
			[0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,1,1,1,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0],
			[0,0,0,1,1,0,0,1,0,0,0,1],
			[0,0,0,0,0,0,0,1,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,1,0],
		],
		[
			[2,0,0,0,0,0,0,0,0,2,2,2],
			[0,0,0,2,2,2,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,2,0,0,0,0,0,0],
			[0,2,2,0,0,0,0,0,0,2,0,0],
			[0,0,0,0,0,2,0,0,0,0,0,0],
			[0,0,0,0,0,2,0,0,0,0,0,0],
			[0,0,0,0,0,2,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,2,0],
		]
	];

	for (var l = 0; l < map.length; l++) {
		for (var c = 0; c < map[l].length; c++) {
			for (var r = 0; r < map[l][c].length; r++) {
				var mapPosition = map[l][c][r];
				var tile = tileMap[mapPosition];
				if(typeof tile !== 'undefined') {
					isos.place(Crafty.e(tile).attr({w:TILE_WIDTH, h:TILE_HEIGHT}),r+10,c-5,l);
				}
			}
		}
	}
});