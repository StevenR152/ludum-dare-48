Crafty.c("LoadLevel", {
	loadLevel: function(player, level, map, isos) {
		for (var l = 0; l < map[level].length; l++) {
			for (var c = 0; c < map[level][l].length; c++) {
				for (var r = 0; r < map[level][l][c].length; r++) {
					var mapPosition = map[level][l][c][r];
					var tile = tileMap[mapPosition];
					if(typeof tile !== 'undefined') {
						isos.place(Crafty.e(tile).attr({w:TILE_WIDTH, h:TILE_HEIGHT}),r,c,0);
					}
				}
			}
		}
		isos.place(player, player.posx, player.posy, 1);
    },
})
