

Crafty.defineScene("Game", function() {
	var musicIcon = Crafty.e("MusicIcon")
		.attr({x: GAME_MUSIC_BUTTON_XPOS, y: GAME_MUSIC_BUTTON_YPOS, w: GAME_MUSIC_BUTTON_WIDTH, h: GAME_MUSIC_BUTTON_HEIGHT})
		.fixedPosition(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS)
		.initClick(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS, GAME_MUSIC_BUTTON_WIDTH, GAME_MUSIC_BUTTON_HEIGHT)
	

	// var player = Crafty.e('Player');
	// makeCameraTrackEntity(player, 75);
	// Crafty.viewport.scale(0.4);

	map = Crafty.e("LevelGenerator").generate_levels();
	Crafty.e("LoadLevel").loadLevel(current_level, map, isos);

  	
	Crafty.bind('GoDownAFloor', function(e) {
		if (current_level < levels_size.length) {
			current_level += 1;
			Crafty.e("LoadLevel").loadLevel(current_level, map);
		}
	});

	Crafty.bind('GoUpAFloor', function(e) {
		if (current_level > 0) {
			current_level -= 1;
			Crafty.e("LoadLevel").loadLevel(current_level, map);
		}
	});

	//current level label
	Crafty.e("Level")
		.attr({x: GAME_SCREEN_WIDTH * 2.8, y: GAME_SCREEN_HEIGHT * 0.15, w: 400, h: 100})
		.fixedPosition(GAME_SCREEN_WIDTH * 2.8, GAME_SCREEN_HEIGHT * 0.15)
		.text("Level: " + (current_level + 1) + " of " + map.length)


});
