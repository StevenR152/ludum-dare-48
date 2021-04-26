function place_collectible(puzzle_flag_map, temp_objects_map, level) {
	// place a random collectible from the into a random safe space INSIDE a puzzle
	var collectible_index = [~~(items_to_be_placed.length * Math.random())];
	var item = items_to_be_placed[collectible_index];

	//find a puzzle location
	for (var max_attempts=0; max_attempts < 10000; max_attempts++) {
		random_row = Math.floor(Math.random() * levels_size[level]);
		random_col = Math.floor(Math.random() * levels_size[level]);
		if (puzzle_flag_map[random_row][random_col] === 1
			&& temp_objects_map[random_row][random_col] === 0) {
				temp_objects_map[random_row][random_col] = item;
				items_to_be_placed.splice(collectible_index, 1);
				break;
			}
		}
	return puzzle_flag_map, temp_objects_map;
}

Crafty.c("LevelGenerator", {
	// this components will generate all the levels of the pyramid on every play
	generate_levels: function() {
		var map = [];

		for (var level = 0; level < levels_size.length; level++) {
			var min = 0;
		  var max = levels_size[level];
			var tileMapLength = Object.keys(tileMap).length;

			// generate ground tiles
			var temp_tiles_map = [];
		    for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
				var x_tiles = [];
				for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
						x_tiles.push(1); // 1 will later randomly select tiles for normal floor.
				}
				temp_tiles_map.push(x_tiles);
			};

			// generate empty objects tilemap
			var temp_objects_map = [];
		  	for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
				var x_tiles = [];
				for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
						x_tiles.push(0);
				}
				temp_objects_map.push(x_tiles);
			};

			// this builds a map (probably useful for object linking?)
			// this map holds reference to whether or not we can build puzzles on this
			// tile, or if theres already a puzzle there.
			var puzzle_flag_map = [];
			for (var a=0; a < levels_size[level]; a++) {
				var row = []
				for (var b=0; b < levels_size[level]; b++) {
					row.push(0); // a 0 here means NO puzzle in this square.
				}
				puzzle_flag_map.push(row);
			}

			// Stop objects / puzzles spawning by the stairs up
			if (next_level_stairs !== undefined) {
				temp_objects_map[next_level_stairs[0]][next_level_stairs[1]] = 9;
				puzzle_flag_map[next_level_stairs[0]][next_level_stairs[1]] = 2;
				puzzle_flag_map[next_level_stairs[0]+1][next_level_stairs[1]] = 2;
				puzzle_flag_map[next_level_stairs[0]][next_level_stairs[1]+1] = 2;
				if (next_level_stairs[0] === 0) {
					puzzle_flag_map[next_level_stairs[0]][next_level_stairs[1]-1] = 2;
				}
				else {
					puzzle_flag_map[next_level_stairs[0]-1][next_level_stairs[1]] = 2;
				}
			}
			var next_level_stairs = [];

			// here we will generate and place one stair puzzle into the object map
			if (level % 2 == 0) { // every even level will have stairs on the right corner
				// make a stairs puzzle at y=0, x = level max
				var returned = place_puzzle(5, 5,
						(levels_size[level] - 5), 0, temp_objects_map, true, puzzle_flag_map);
						next_level_stairs.push(0,levels_size[level]-1);
			}
			else { // odd levels have stairs in the left corner
				// make a stairs puzzle at y=level max, x = 0
				var returned = place_puzzle(5, 5,
						0 , (levels_size[level] - 5), temp_objects_map, true, puzzle_flag_map);
						next_level_stairs.push(levels_size[level]-1, 0);
			}
			temp_objects_map = returned[0];
			puzzle_flag_map = returned[1];

			// here we will generate and place other puzzles into the object map
			//so we work out what squares are already filled with a stair puzzle and ignore those
			// then we cycle through the rest of the grid, and decide if a puzzle will/can go here.
			// if it can we generate a size and try find a matching prebuilt puzzle of this size
			for (var a=0; a < levels_size[level]; a++) {
				for (var b=0; b < levels_size[level]; b++) {
					if (puzzle_flag_map[a][b] === 0) {
						// then we might be able to place a puzzle here, check the width+height maximum
						var count = 0;
						for (var i=a; i < levels_size[level]; i++){

							if (puzzle_flag_map[i][b] !== 0) {
								//there's already a "puzzle piece" here
								break;
							}
							count += 1;
						}
						var max_height_remain = count;

						var count = 0;
						for (var i=b; i < levels_size[level]; i++){

							if (puzzle_flag_map[a][i] !== 0) {
								//there's already a "puzzle piece" here
								break;
							}
							count += 1;
						}
						var max_width_remain = count;
						var start_row = a;
						var start_col = b;
						if ((max_width_remain) > min_puzzle_width &&
						 	(max_height_remain) > min_puzzle_height) {
								if (max_width_remain > max_puzzle_width) {
									max_width_remain = max_puzzle_width;
								}
								if (max_height_remain > max_puzzle_height) {
									max_height_remain = max_puzzle_height;
								}
							var puzzle_width = Math.floor(Math.random() *
								(Math.floor(max_width_remain+1) -
									Math.ceil(min_puzzle_width)) + Math.ceil(min_puzzle_width));
							var puzzle_height = Math.floor(Math.random() *
								(Math.floor(max_height_remain+1) -
									Math.ceil(min_puzzle_height)) + Math.ceil(min_puzzle_height))

							var returned = place_puzzle(puzzle_width, puzzle_height,
								start_col, start_row, temp_objects_map, false, puzzle_flag_map);
							temp_objects_map = returned[0];
							puzzle_flag_map = returned[1];
						}
					}
				}
			}

			// put this level together into the map
			if (items_to_be_placed.length > 0) {
				if (items_to_be_placed.length === levels_size.length - (level+1)) {
					//then we must place something NOW
					puzzle_flag_map, temp_objects_map = place_collectible(puzzle_flag_map, temp_objects_map, level);
				}
				else {
					var chance = Math.floor(Math.random() * (Math.floor(items_to_be_placed.length+1)));
					if (chance === items_to_be_placed.length) {
						puzzle_flag_map, temp_objects_map = place_collectible(puzzle_flag_map, temp_objects_map, level);
					}
				}
			}


			map.push([temp_tiles_map,temp_objects_map]);
	    }
		map.push(finalLevel);
		return map;
	}
})
