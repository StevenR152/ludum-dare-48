var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
var current_level = 0;


Crafty.defineScene("Game", function() {

	var ground = '2D, DOM, Color, tile';
	var sand = '2D, DOM, Color, tile';
	var stairs = '2D, DOM, Color, stairs';
	// var wall = '2D, DOM, Color, wall';
	var player = Crafty.e('Player');

    makeCameraTrackEntity(player, 75);
	Crafty.viewport.scale(0.3);

	var tileMap = {
		1 : ground,
		3 : stairs
	}

	map = Crafty.e("LevelGenerator").generate_levels();
	Crafty.e("LoadLevel").loadLevel(player, tileMap, current_level, map, isos); // will need to be called whenever stairs are accessed

  Crafty.bind('PlayerMovement', function(e) { //this probably can stay inside the game component but we could also extract it later
		if (map !== 'undefined' &&
			map[current_level][0] !== 'undefined' &&
			map[current_level][0][player.posy+e.y-1] !== 'undefined' &&
			map[current_level][0][player.posy+e.y-1][player.posx+e.x-1] !== 'undefined') {
				if (map[current_level][0][player.posy+e.y-1][player.posx+e.x-1] === 1) {
					player.posx += e.x;
					player.posy += e.y;
					isos.place(player, (player.posx), (player.posy), 1);
				}
		}

	})

});
