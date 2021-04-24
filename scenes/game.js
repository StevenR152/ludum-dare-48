var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);

Crafty.defineScene("Game", function() {
	Crafty.viewport.scale(0.3);

	var ground = '2D, DOM, Color, tile';
	var sand = '2D, DOM, Color, tile';
	var urn = '2D, DOM, Color, urn';
	var player = Crafty.e('Player');


	var tileMap = {
		1 : ground,
		5 : sand,
		3 : urn
	}

	var map = [
		[
			// level one
			[
			// Tiles
				[1,0,0,0,0,1,1,1,1,1,1,1],
				[0,0,0,1,1,1,0,0,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0,0,0],
				[0,0,0,0,0,1,1,1,0,0,0,0],
				[0,0,0,0,1,1,1,1,0,0,0,0],
				[0,0,0,0,1,1,1,1,0,0,0,0],
				[0,0,0,1,1,1,1,1,1,1,1,1],
				[0,0,0,0,0,0,0,1,0,0,1,0],
				[0,0,0,0,0,0,0,1,0,0,1,0],
				[0,0,0,0,0,0,0,1,0,0,1,0],
			],
			[
			// Objects
				[5,0,0,0,0,0,0,0,0,3,0,3],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
			]
		],
		[
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
			],
			[
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0],
			]
		]
	];

	for (var ol = 0; ol < map.length; ol++) {
		for (var l = 0; l < map[ol].length; l++) {
			for (var c = 0; c < map[ol][l].length; c++) {
				for (var r = 0; r < map[ol][l][c].length; r++) {
					var mapPosition = map[ol][l][c][r];
					var tile = tileMap[mapPosition];
					if(typeof tile !== 'undefined') {
						isos.place(Crafty.e(tile).attr({w:TILE_WIDTH, h:TILE_HEIGHT}),r+8,c-4,ol);
					}
				}
			}
		}
	}

	isos.place(player, player.posx+8, player.posy-4, 1);

  Crafty.bind('Movement', function(e) {
		var debugy = player.posy+e.y-1;
		var debugx = player.posx+e.x-1;
		if (map[0] !== 'undefined' &&
			map[0][0] !== 'undefined' &&
			map[0][0][player.posy+e.y-1] !== 'undefined' &&
			map[0][0][player.posy+e.y-1][player.posx+e.x-1] !== 'undefined') {
				if (map[0][0][player.posy+e.y-1][player.posx+e.x-1] === 1) {
					player.posx += e.x;
					player.posy += e.y;
					isos.place(player, (player.posx + 8), (player.posy - 4), 1);
					console.log("we be moving");
				}
		}

	})

});
