

Crafty.defineScene("Game", function() {
	var musicIcon = Crafty.e("MusicIcon")
		.attr({x: GAME_MUSIC_BUTTON_XPOS, y: GAME_MUSIC_BUTTON_YPOS, w: GAME_MUSIC_BUTTON_WIDTH, h: GAME_MUSIC_BUTTON_HEIGHT})
		.fixedPosition(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS)
		.initClick(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS, GAME_MUSIC_BUTTON_WIDTH, GAME_MUSIC_BUTTON_HEIGHT)
	

	var player = Crafty.e('Player');
	makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.5);


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
			if(newy < 0 || newx <= 0 || newy >= map[current_level+1][0].length || newx >= map[current_level+1][0][newy].length) {
				player.posx += e.x;
				player.posy += e.y + 1;
  		}
			else {
				player.posx += e.x + 1;
				player.posy += e.y;
			}
			Crafty.trigger("GoDownAFloor", {});
			return;
		}

		// Stairs up
		if (map[current_level][1][newy][newx] === 9) {
			if(newy < 0 || newx <= 0 || newy >= map[current_level-1][0].length || newx >= map[current_level-1][0][newy].length) {
				player.posx += e.x +1 ;
				player.posy += e.y;
  		}
			else {
				player.posx += e.x -1 ;
				player.posy += e.y;
			}
			Crafty.trigger("GoUpAFloor", {});
			return;
		}

		// Pillar and other solid objects
		if (map[current_level][1][newy][newx] > 10 &&
			 	map[current_level][1][newy][newx] < 20) {
			return;
		}

		// if we haven't returned already, we must be able to move there.
		player.posx += e.x;
		player.posy += e.y;
		isos.place(player, (player.posx), (player.posy), 1);
		return;
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

	//current level label
	Crafty.e("Level")
		.attr({x: GAME_SCREEN_WIDTH * 2.8, y: GAME_SCREEN_HEIGHT * 0.15, w: 400, h: 100})
		.fixedPosition(GAME_SCREEN_WIDTH * 2.8, GAME_SCREEN_HEIGHT * 0.15)
		.text("Level: " + (current_level + 1) + " of " + map.length)


});
