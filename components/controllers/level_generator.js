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
			var temp_objects_map = [];
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
				var returned = place_puzzle(5, 5,
						(levels_size[level] - 5), 0, temp_objects_map, true, puzzle_flag_map);
			}
			else { // odd levels have stairs in the left corner
				// make a stairs puzzle at y=level max, x = 0
				var returned = place_puzzle(5, 5,
						0 , (levels_size[level] - 5), temp_objects_map, true, puzzle_flag_map);
			}
			temp_objects_map = returned[0];
			puzzle_flag_map = returned[1];

			// here we will generate and place OTHER puzzles into the object map
			//so we work out what squares are already filled with a stair puzzle and ignore those
			// then we cycle through the rest of the grid, and decide if a puzzle will/can go here.
			// if it can we generate a size of puzzle (we start with 7 * 9 for the moment)
			// then we must ignore those squares.
			for (var a=0; a < levels_size[level]; a++) {
				for (var b=0; b < levels_size[level]; b++) {
					if (puzzle_flag_map[a][b] === 0) {
						// then we might be able to place a puzzle here, check the width+height maximum
						var count = 0;
						for (var i=a; i < levels_size[level]; i++){

							if (puzzle_flag_map[i][a] === 1) {
								//there's already a puzzle piece here
								break;
							}
							count += 1;
						}
						var max_height_remain = count;

						var count = 0;
						for (var i=b; i < levels_size[level]; i++){

							if (puzzle_flag_map[a][i] === 1) {
								//there's already a puzzle piece here
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
