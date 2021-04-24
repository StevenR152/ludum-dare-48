Crafty.defineScene("Game", function() {

	var player = Crafty.e('Player');
	makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	map = Crafty.e("LevelGenerator").generate_levels();
	Crafty.e("LoadLevel").loadLevel(player, current_level, map, isos);

  Crafty.bind('PlayerMovement', function(e) { //this probably can stay inside the game component but we could also extract it later
  		var newy = player.posy+e.y-1;
  		var newx = player.posx+e.x-1;

  		if(newy < 0 || newx < 0 || newy >= map[current_level][0].length || newx >= map[current_level][0][newy].length) {
  			return; // outside map bounds.
  		}

		// stairs down
		if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] === 8) {
			player.posx += 1 + e.x;
			player.posy += e.y;
			isos.place(player, (player.posx), (player.posy), 1);
			Crafty.trigger("GoDownAFloor", {});
			return;
		}
		// Stairs up
		else if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] === 9) {
			player.posx += e.x;
			player.posy += e.y;
			isos.place(player, (player.posx), (player.posy), 1);
			Crafty.trigger("GoUpAFloor", {});
			return;
		}
		// Pillar
		else if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] > 10) {
			return;
		}
		
		// the array 1,2,3,4,5 here is all tiles mapped that the player can walk on - can parametarise later.
		else if ([1,2,3,4,5].indexOf(map[current_level][0][player.posy+e.y-1][player.posx+e.x-1]) > -1) {
			player.posx += e.x;
			player.posy += e.y;
			console.log("moving" + e);
			isos.place(player, (player.posx), (player.posy), 1);
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
