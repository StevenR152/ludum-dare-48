Crafty.c("LoadLevel", {
	loadLevel: function(player, level, map) {
		Crafty("Destroyable").each(function(i) {
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

		var button = Crafty.e("Button");
		isos.place(button, player.posx+1, player.posy+1, 0);
		var tileSpikes1 = Crafty.e("TileSpikes");
		isos.place(tileSpikes1, player.posx, player.posy, 0);
		button.attachLink(tileSpikes1, tileSpikes1.disable);
		var tileSpikes4 = Crafty.e("TileSpikes");
		isos.place(tileSpikes4, player.posx-1, player.posy, 0);
		button.attachLink(tileSpikes4, tileSpikes4.disable);		
		var tileSpikes5 = Crafty.e("TileSpikes");
		isos.place(tileSpikes5, player.posx-1, player.posy+1, 0);
		button.attachLink(tileSpikes5, tileSpikes4.disable);

		var button2 = Crafty.e("Button");
		isos.place(button2, player.posx+1, player.posy, 0);
		var tileSpikes2 = Crafty.e("TileSpikes");
		isos.place(tileSpikes2, player.posx, player.posy+1, 0);
		button2.attachLink(tileSpikes2, tileSpikes2.disable);
		button2.attachLink(tileSpikes4, tileSpikes4.enable);
		var button3 = Crafty.e("Button");
		isos.place(button3, player.posx+1, player.posy+2, 0);
		var tileSpikes3 = Crafty.e("TileSpikes");
		isos.place(tileSpikes3, player.posx, player.posy+2, 0);
		button3.attachLink(tileSpikes3, tileSpikes3.disable);
		button3.attachLink(tileSpikes1, tileSpikes1.enable);
		button3.attachLink(tileSpikes2, tileSpikes2.enable);
		console.log("player placed" , player.posx, player.posy);
    },

    placeGroundTile : function (level, l, c, r) {
    	var mapPosition = map[level][l][c][r];
		var tile = tileMap[mapPosition];
		if(typeof tile !== 'undefined') {
	        // as we're grouping 2 layers into one for tiles and objects
	        // only every even number is a "real" layer of the pyramid
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
	    	isos.place(Crafty.e("WallRight"),r,c,0);
	    	return;
	    }
	    if(l == 0 && r == 0){
	    	isos.place(Crafty.e("WallLeft"),r,c,0);
	    	return;
	    }
    }
})
