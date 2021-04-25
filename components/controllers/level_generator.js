Crafty.c("LevelGenerator", {
	// this components will generate all the levels of the pyramid on every play
	generate_levels: function() {
		var map = [];

		for (var level = 0; level < levels_size.length; level++) {
			min = 0;
		  	max = levels_size[level];
			var tileMapLength = Object.keys(tileMap).length;

			// generate ground tiles
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

			// generate add objects on tiles
			temp_objects_map = [];
		  	for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
				var x_tiles = [];
				for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
					var chance = 3;// the % chance of spawning an object
					var object_chance = Math.random() * 100;
					if (object_chance <= chance && temp_tiles_map[lvl_x][lvl_y] !== 0) {
						var randomObject = Math.ceil(Math.random()*3)+10; // plus 10 as all of the object start from 11.
						x_tiles.push(randomObject);
					}else {
						x_tiles.push(0);
					}
				}
				temp_objects_map.push(x_tiles);
			};

			// generate stairs on the edges
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
