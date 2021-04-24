var levels_size = [5,9,13,17,27,39]; // to move to constants later
var tileMap = {
	1 : basic_tile_1,
	2 : basic_tile_2,
	3 : tile_leave1,
	4 : tile_leave2,
	5 : tile_cracked
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
	    for (var lvl_x = 0; lvl_x < levels_size[current_level]; lvl_x++) {
			var x_tiles = [];
			for (var lvl_y = 0; lvl_y < levels_size[current_level]; lvl_y++) {
				var key = Math.ceil(Math.random() * tileMapLength);
				console.log(key, tileMap[key]);
				x_tiles.push(key);
			}
			temp_tiles_map.push(x_tiles);
		};

		temp_objects_map = [];
	  for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
			var x_tiles = [];
			for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
				x_tiles.push(0);
			}
			temp_objects_map.push(x_tiles);
		};
		//place stairs on the edges
		var stairsList = [
			{ stairX: Math.floor(Math.random() * max), stairY: 0 },
			{ stairX: Math.floor(Math.random() * max), stairY: max - 1 },
			{ stairX: 0, stairY: Math.floor(Math.random() * max) },
			{ stairX: max - 1, stairY: Math.floor(Math.random() * max) }
		];

		min = 0;
	  max = levels_size[level];
		var newStairsList = stairsList;
		for(var count = 0; count < MAX_STAIRS; ++count) {
			var index = Math.floor(Math.random() * newStairsList.length)
			var strs = newStairsList[index];
			temp_objects_map[stairX][stairY] = 8;

			//remove it from the list so that it doesn't pick the same item
			newStairsList.splice(index, 1);
		}

		 map.push([temp_tiles_map,temp_objects_map]);
    }
		return map;
	}
})
