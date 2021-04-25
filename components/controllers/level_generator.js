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
					// var chance = 3;// the % chance of spawning an object
					// var object_chance = Math.random() * 100;
					// if (object_chance <= chance && temp_tiles_map[lvl_x][lvl_y] !== 0) {
					// 	var randomObject = Math.ceil(Math.random()*NUMBER_OF_RANDOM_OBJECTS)+10; // plus 10 as all of the object start from 11.
					// 	x_tiles.push(randomObject);
					// } else {
						x_tiles.push(0);
					// }
				}
				temp_objects_map.push(x_tiles);
			};

			var puzzle_flag_map = [];
			for (var a=0; a < levels_size[level]; a++) {
				var row = []
				for (var b=0; b < levels_size[level]; b++) {
					row.push(0); // a 0 here means NO puzzle in this square.
				}
				puzzle_flag_map.push(row);
			}

			// here we will generate and place one stair puzzle into the object map
			if (level % 2 == 0) { // every even level will be stairs on the right corner
				// make a stairs puzzle at y=0, x = level max
				temp_objects_map, puzzle_flag_map = place_puzzle(5, 5,
						(levels_size[level] - 5), 0, temp_objects_map, true, puzzle_flag_map);
			}
			else { // odd levels have stairs in the left corner
				// make a stairs puzzle at y=level max, x = 0
				temp_objects_map, puzzle_flag_map = place_puzzle(5, 5,
						0 , (levels_size[level] - 5), temp_objects_map, true, puzzle_flag_map);
			}

			// here we will generate and place OTHER puzzles into the object map
			//so we work out what squares are already filled with a stair puzzle and ignore those
			// then we cycle through the rest of the grid, and decide if a puzzle will/can go here.
			// if it can we generate a size of puzzle (we start with 7 * 9 for the moment)
			// then we must ignore those squares.
			for (var b=0; b < levels_size[level]; b++) {
				for (var a=0; a < levels_size[level]; a++) {
					if (puzzle_flag_map[a][b] === 0) {
						// then we might be able to place a puzzle here, check the width+height maximum
						var count = 0;
						for (var i=a; i < levels_size[level]; i++){

							if (puzzle_flag_map[a][i] === 1) {
								//there's already a puzzle here
								break;
							}
							count += 1;
						}
						var max_width_remain = count;

						var count = 0;
						for (var i=b; i < levels_size[level]; i++){

							if (puzzle_flag_map[i][b] === 1) {
								//there's already a puzzle here
								break;
							}
							count += 1;
						}
						var max_height_remain = count;
						// var start_at_x = Math.floor(Math.random() * (2));
						// var start_at_y = Math.floor(Math.random() * (2));
						var start_at_x = b;
						var start_at_y = a;
						if (max_width_remain > 8 && max_height_remain > 6) {
							// minimum puzzle size is 3x3
							var puzzle_width = Math.floor(Math.random() *
								(Math.floor(max_puzzle_width) - Math.ceil(9)) + Math.ceil(9));
							var puzzle_height = Math.floor(Math.random() *
								(Math.floor(max_puzzle_height+1) - Math.ceil(7)) + Math.ceil(7))

							temp_objects_map, puzzle_flag_map = place_puzzle(puzzle_width, puzzle_height,
								start_at_x, start_at_y, temp_objects_map, false, puzzle_flag_map);
						}
					}
				}
			}



			// // generate stairs on the edges
			// if (next_level_stairs !== undefined) {
			// 	for (var stairs_up = 0; stairs_up < next_level_stairs.length; stairs_up++) {
			// 		temp_objects_map[next_level_stairs[stairs_up].stairX][next_level_stairs[stairs_up].stairY] = 9;
			// 	}
			// }
			// var next_level_stairs = [];
			// var stairsList = [
			// 	{ stairX: Math.floor(Math.random() * max), stairY: 0 },
			// 	{ stairX: Math.floor(Math.random() * max), stairY: max - 1 },
			// 	{ stairX: 0, stairY: Math.floor(Math.random() * max) },
			// 	{ stairX: max - 1, stairY: Math.floor(Math.random() * max) }
			// ];
			//
			// var newStairsList = stairsList;
			// for(var count = 0; count < MAX_STAIRS; ++count) {
			// 	var index = Math.floor(Math.random() * newStairsList.length)
			// 	var strs = newStairsList[index];
			// 	if (temp_objects_map[strs.stairX][strs.stairY] === 0) {
			// 		temp_objects_map[strs.stairX][strs.stairY] = 8;
			// 		next_level_stairs.push(strs);
			//
			// 		//remove it from the list so that it doesn't pick the same item
			// 		newStairsList.splice(index, 1);
			// 	}
			// 	else {
			// 		count-=1;
			// 	}
			// }

			// put this level together into the map
			map.push([temp_tiles_map,temp_objects_map]);
	    }

		return map;
	}
})
