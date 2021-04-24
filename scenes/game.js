var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
var current_level = 0;


Crafty.defineScene("Game", function() {

	var ground = '2D, DOM, Color, tile';
	var sand = '2D, DOM, Color, tile';
	var stairs = '2D, DOM, Color, stairs';
	// var wall = '2D, DOM, Color, wall';
	var player = Crafty.e('Player');

    makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	var tileMap = {
		1 : ground,
		3 : stairs
	}

 	var levels_size = [5,9,13,17,27,39];

	min = 0;
  max = levels_size[current_level] + 1;
	stairs_x = Math.floor(Math.random() * (max - min) + min);
	stairs_y = Math.floor(Math.random() * (max - min) + min);

	temp_tiles_map = [];
  for (var lvl_x = 0; lvl_x < levels_size[current_level]; lvl_x++) {
		var x_tiles = [];
		for (var lvl_y = 0; lvl_y < levels_size[current_level]; lvl_y++) {
			x_tiles.push(1);
		}
		temp_tiles_map.push(x_tiles);
	};

	temp_objects_map = [];
  for (var lvl_x = 0; lvl_x < levels_size[current_level]; lvl_x++) {
		var x_tiles = [];
		for (var lvl_y = 0; lvl_y < levels_size[current_level]; lvl_y++) {
			x_tiles.push(0);
		}
		temp_objects_map.push(x_tiles);
	};

	var map = [temp_tiles_map,temp_objects_map];

		for (var l = 0; l < map.length; l++) {
			for (var c = 0; c < map[l].length; c++) {
				for (var r = 0; r < map[l][c].length; r++) {
					var mapPosition = map[l][c][r];
					var tile = tileMap[mapPosition];
					if(typeof tile !== 'undefined') {
						isos.place(Crafty.e(tile).attr({w:TILE_WIDTH, h:TILE_HEIGHT}),r,c,0);
					}
				}
			}
		}

		isos.place(Crafty.e(stairs).attr({w:TILE_WIDTH, h:TILE_HEIGHT}), stairs_x, stairs_y, 0);


	isos.place(player, player.posx, player.posy, 1);

  Crafty.bind('Movement', function(e) {
		if (map !== 'undefined' &&
			map[0] !== 'undefined' &&
			map[0][player.posy+e.y-1] !== 'undefined' &&
			map[0][player.posy+e.y-1][player.posx+e.x-1] !== 'undefined') {
				if (map[0][player.posy+e.y-1][player.posx+e.x-1] === 1) {
					player.posx += e.x;
					player.posy += e.y;
					isos.place(player, (player.posx), (player.posy), 1);
				}
		}

	})

});
