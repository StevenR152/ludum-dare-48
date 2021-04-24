var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
var current_level = 0;
var MAX_STAIRS = 1;

Crafty.defineScene("Game", function() {

	var player = Crafty.e('Player');
	makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	map = Crafty.e("LevelGenerator").generate_levels();
	Crafty.e("LoadLevel").loadLevel(player, current_level, map, isos);

  Crafty.bind('PlayerMovement', function(e) { //this probably can stay inside the game component but we could also extract it later
		if (map !== 'undefined' &&
			map[current_level][0] !== 'undefined' &&
			map[current_level][0][player.posy+e.y-1] !== 'undefined' &&
			map[current_level][0][player.posy+e.y-1][player.posx+e.x-1] !== 'undefined') {
				if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] === 8) {
					player.posx += 1 + e.x;
					player.posy += e.y;
					isos.place(player, (player.posx), (player.posy), 1);
					Crafty.trigger("GoDownAFloor", {});
					return;
				}
				else if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] === 9) {
					player.posx += e.x;
					player.posy += e.y;
					isos.place(player, (player.posx), (player.posy), 1);
					Crafty.trigger("GoUpAFloor", {});
					return;
				}
				else if (map[current_level][1][player.posy+e.y-1][player.posx+e.x-1] > 10) {
					return;
				}
				// the array 1,2,3,4,5 here is all tiles mapped that the player can walk on - can parametarise later.
				else if ([1,2,3,4,5].indexOf(map[current_level][0][player.posy+e.y-1][player.posx+e.x-1]) > -1) {
					player.posx += e.x;
					player.posy += e.y;
					isos.place(player, (player.posx), (player.posy), 1);
				}
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
