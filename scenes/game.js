Crafty.defineScene("Game", function() {

	var player = Crafty.e('Player');
	makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	map = Crafty.e("LevelGenerator").generate_levels();
	Crafty.e("LoadLevel").loadLevel(player, current_level, map, isos);

  	Crafty.bind('PlayerMovement', function(e) { //this probably can stay inside the game component but we could also extract it later
  		var newy = player.posy+e.y-1;
  		var newx = player.posx+e.x-1;

		// walked outside of map, don't allow it.
  		if(newy < 0 || newx < 0 || newy >= map[current_level][0].length || newx >= map[current_level][0][newy].length) {
  			return; 
  		}

		// stairs down
		if (map[current_level][1][newy][newx] === 8) {
			player.posx += 1 + e.x;
			player.posy += e.y;
			isos.place(player, (player.posx), (player.posy), 1);
			Crafty.trigger("GoDownAFloor", {});
			return;
		}
		
		// Stairs up
		if (map[current_level][1][newy][newx] === 9) {
			player.posx += e.x;
			player.posy += e.y;
			isos.place(player, (player.posx), (player.posy), 1);
			Crafty.trigger("GoUpAFloor", {});
			return;
		}

		// Pillar
		if (map[current_level][1][newy][newx] > 10) {
			return;
		}

		// the array 1,2,3,4,5 here is all tiles mapped that the player can walk on - can parametarise later.
		if ([1,2,3,4,5].indexOf(map[current_level][0][newy][newx]) > -1) {
			player.posx += e.x;
			player.posy += e.y;
			isos.place(player, (player.posx), (player.posy), 1);
			return;
		}
		
	});

	Crafty.bind('GoDownAFloor', function(e) {
		if (current_level < levels_size.length) {
			current_level += 1;
			Crafty.e("LoadLevel").loadLevel(player, current_level, map);
		}
	});

	Crafty.bind('GoUpAFloor', function(e) {
		if (current_level > 0) {
			current_level -= 1;
			Crafty.e("LoadLevel").loadLevel(player, current_level, map);
		}
	});
});
