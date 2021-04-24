var levels_size = [5,9,13,17,27,39]; // to move to constants later

Crafty.c("LevelGenerator", {
	// this components will generate all the levels of the pyramid on every play
	generate_levels: function() {
		var map = [];

		for (var level = 0; level < levels_size.length; level++) {
		min = 0;
	  max = levels_size[level];
		stairs_x = Math.floor(Math.random() * (max - min) + min);
		stairs_y = Math.floor(Math.random() * (max - min) + min);

		temp_tiles_map = [];
	  for (var lvl_x = 0; lvl_x < levels_size[level]; lvl_x++) {
			var x_tiles = [];
			for (var lvl_y = 0; lvl_y < levels_size[level]; lvl_y++) {
				x_tiles.push(1);
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
		temp_objects_map[stairs_x][stairs_y] = 8;

		 map.push([temp_tiles_map,temp_objects_map]);
    }
		return map;
	}
})
