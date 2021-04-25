Crafty.c("LoadLevel", {
	loadLevel: function(player, level, map) {
		Crafty("object").each(function(i) {
      		this.destroy();
		});
		for (var l = 0; l < map[level].length; l++) {
			for (var c = 0; c < map[level][l].length; c++) {
				for (var r = 0; r < map[level][l][c].length; r++) {
					this.placeGroundTile(level, l,c,r);
					this.tryPlaceWall(l,c,r);

				}
			}
		}
		isos.place(player, player.posx, player.posy, 1);
    },

    placeGroundTile : function (level, l, c, r) {
    	var mapPosition = map[level][l][c][r];
		var tile = tileMap[mapPosition];
		if(typeof tile !== 'undefined') {
        // as we're grouping 2 layers into one for tiles and objects
        if (l % 2 != 0) {
          isos.place(Crafty.e(tile),r+1,c+1,l);
        }
        else {
          isos.place(Crafty.e(tile),r,c,l);
        }
		}
    },

    tryPlaceWall: function (l, c, r) {
    	if(l == 0 && c == 0){
    	console.log("called");
	    	isos.place(Crafty.e("WallRight"),r,c,0);
	    	return;
	    }
	    if(l == 0 && r == 0){
    	console.log("called");
	    	isos.place(Crafty.e("WallLeft"),r,c,0);
	    	return;
	    }
    }
})
