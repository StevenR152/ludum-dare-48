var levels_size = [5,9,13,17,27,39]; // to move to constants later
var basic_tile_1 = 'object, 2D, DOM, Color, basic_tile_1';
var basic_tile_2 = 'object, 2D, DOM, Color, basic_tile_2';
var tile_leave1 = 'object, 2D, DOM, Color, tile_leaves_1';
var tile_leave2 = 'object, 2D, DOM, Color, tile_leaves_2';
var tile_cracked = 'object, 2D, DOM, Color, tile_cracked_1';
var stairs = 'object, 2D, DOM, Color, stairs';
var stairs_up = 'object, 2D, DOM, Color, stairs_up';
var pillar1 = 'object, 2D, DOM, Color, pillar1';

//Keep 10+ index values for solid objects
var tileMap = {
		1 : basic_tile_1,
		2 : basic_tile_2,
		3 : tile_leave1,
		4 : tile_leave2,
		5 : tile_cracked,
		8 : stairs,
		9 : stairs_up,
		11 : pillar1
}

Crafty.c("LevelGenerator", {
	// this components will generate all the levels of the pyramid on every play
	generate_levels: function() {
		var map = [];

		for (var level = 0; level < levels_size.length; level++) {
		min = 0;
	  max = levels_size[level];
		var tileMapLength = Object.keys(tileMap).length;


		temp_tiles_map = [];
	    for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
			var x_tiles = [];
			for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
				// if ((Math.random() * 100) < 4) {
				// 	x_tiles.push(0);
				// }
				// else {
					var key = Math.ceil(Math.random() * (4.1)); //first X tiles you can walk on
					x_tiles.push(key);
				// }
			}
			temp_tiles_map.push(x_tiles);
		};

		temp_objects_map = [];
	  for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
			var x_tiles = [];
			for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
				var chance = 0.5;// the % chance of spawning an object
				var object_chance = Math.random() * 100;
				if (object_chance <= chance && temp_tiles_map[lvl_x][lvl_y] !== 0) {
					//coming later, choose an object or have this work as part of puzzles
					x_tiles.push(11); //pillar
				}
				else {
					x_tiles.push(0);
				}
			}
			temp_objects_map.push(x_tiles);
		};

		var chance = 3;// the % chance of spawning this item
		var object_x = Math.floor(Math.random() * 100);


		// STAIRS CODE
		//place stairs on the edges
		if (next_level_stairs !== undefined) {
			for (var stairs_up = 0; stairs_up < next_level_stairs.length; stairs_up++) {
				temp_objects_map[next_level_stairs[stairs_up].stairX][next_level_stairs[stairs_up].stairY] = 9;
			}
		}
		var next_level_stairs = [];
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
			temp_objects_map[strs.stairX][strs.stairY] = 8;
			next_level_stairs.push(strs);

			//remove it from the list so that it doesn't pick the same item
			newStairsList.splice(index, 1);
		}

		// put this level together into the map
		 map.push([temp_tiles_map,temp_objects_map]);
    }
		return map;
	}
})
