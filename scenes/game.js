var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
var current_level = 2;
var MAX_STAIRS = 3;


Crafty.defineScene("Game", function() {

	var ground = '2D, DOM, Color, tile';
	var basic_tile_1 = '2D, DOM, Color, basic_tile_1';
	var basic_tile_2 = '2D, DOM, Color, basic_tile_2';
	var tile_leave1 = '2D, DOM, Color, tile_leaves_1';
	var tile_leave2 = '2D, DOM, Color, tile_leaves_2';
	var tile_cracked = '2D, DOM, Color, tile_cracked_1';

	var sand = '2D, DOM, Color, tile';
	// var wall = '2D, DOM, Color, wall';
	var player = Crafty.e('Player');

    makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	var tileMap = {
		1 : basic_tile_1,
		2 : basic_tile_2,
		3 : tile_leave1,
		4 : tile_leave2,
		5 : tile_cracked
	}
	var tileMapLength = Object.keys(tileMap).length;
 	var levels_size = [5,9,13,17,27,39];

	min = 0;
  	max = levels_size[current_level];
	

	//place tiles
	temp_tiles_map = [];
    for (var lvl_x = 0; lvl_x < levels_size[current_level]; lvl_x++) {
		var x_tiles = [];
		for (var lvl_y = 0; lvl_y < levels_size[current_level]; lvl_y++) {
			var key = Math.ceil(Math.random() * tileMapLength);
			x_tiles.push(key);
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

	//place stairs on the edges
	var stairsList = [
		{ stairX: Math.floor(Math.random() * max), stairY: 0 },
		{ stairX: Math.floor(Math.random() * max), stairY: max - 1 },
		{ stairX: 0, stairY: Math.floor(Math.random() * max) },
		{ stairX: max - 1, stairY: Math.floor(Math.random() * max) }
	];

	var newStairsList = stairsList;
	for(var count = 0; count < MAX_STAIRS; ++count) {
		var index = Math.floor(Math.random() * newStairsList.length)
		var strs = newStairsList[index];
		isos.place(Crafty.e('2D, DOM, Color, stairs')
			.attr({w:TILE_WIDTH, h:TILE_HEIGHT}), strs.stairX, strs.stairY, 0);
		
		//remove it from the list so that it doesn't pick the same item			
		newStairsList.splice(index, 1);
	}


	//player
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
