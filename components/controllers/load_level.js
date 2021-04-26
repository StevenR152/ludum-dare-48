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

		// link buttons to their associated triggered item.
		// This loops over all Buttons that have been Linked to something,
		// finds those things its linked to, and then attaches a link calling action.
		var buttonsToLink = Crafty("Button Linked")
		if(buttonsToLink.length > 0) {
			buttonsToLink.each(function (index) {
				var button = Crafty(buttonsToLink[index])
				var linkNumber = button.getLinkedNumber();
				var ItemsLinkedTo = Crafty("Linked LinkedTo" + linkNumber);
				ItemsLinkedTo.each(function (index) {
					entityToLink = Crafty(ItemsLinkedTo[index])
					button.attachLink(entityToLink, entityToLink.actionCallback);
				})
			});
		}

		// var button = Crafty.e("Button");
		// isos.place(button, player.posx+1, player.posy+1, 0);
		// var tileSpikes1 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes1, player.posx, player.posy, 0);
		// button.attachLink(tileSpikes1, tileSpikes1.disable);
		// var tileSpikes4 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes4, player.posx-1, player.posy, 0);
		// button.attachLink(tileSpikes4, tileSpikes4.disable);		
		// var tileSpikes5 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes5, player.posx-1, player.posy+1, 0);
		// button.attachLink(tileSpikes5, tileSpikes4.disable);

		// var button2 = Crafty.e("Button");
		// isos.place(button2, player.posx+1, player.posy, 0);
		// var tileSpikes2 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes2, player.posx, player.posy+1, 0);
		// button2.attachLink(tileSpikes2, tileSpikes2.disable);
		// button2.attachLink(tileSpikes4, tileSpikes4.enable);
		// var button3 = Crafty.e("Button");
		// isos.place(button3, player.posx+1, player.posy+2, 0);
		// var tileSpikes3 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes3, player.posx, player.posy+2, 0);
		// button3.attachLink(tileSpikes3, tileSpikes3.disable);
		// button3.attachLink(tileSpikes1, tileSpikes1.enable);
		// button3.attachLink(tileSpikes2, tileSpikes2.enable);
		console.log("player placed" , player.posx, player.posy);
    },

    placeGroundTile : function (level, l, c, r) {
    	var mapPosition = map[level][l][c][r];

		var tile = tileMap[mapPosition];
		// ground tiles are all 1's now, so randomly select time to show.
		if(mapPosition === 1) {
			var index = Math.floor(Math.random()*randomFloor.length);
			tile = randomFloor[index];
		}

		var tileNumber = mapPosition;
		var linkingElement = null;
		// For composite position like 2101 split it into 21 and 01 as the 
		// tile number being 21 and the linking being 01.
		if(mapPosition > 1000) {
			tileNumber = Math.floor(mapPosition / 100)
			linkingElement = mapPosition - tileNumber*100;
			var tile = tileMap[tileNumber];
			console.log(tileNumber, linkingElement)
		}

		if(typeof tile !== 'undefined') {
	        // as we're grouping 2 layers into one for tiles and objects
	        // only every even number is a "real" layer of the pyramid
	        var tileEntity = Crafty.e(tile);
	        if (l % 2 != 0) {
	          isos.place(tileEntity,r+1,c+1,l);
	        } else {
	          isos.place(tileEntity,r,c,l);
	        }

	        // If the tile contains a triggerable/triggered item, link them.
	        if(linkingElement !== null) {
	        	// Two components, one to state its linked, 
	        	// the other to allow us to look them up later with Crafty(LinkedToXXX)
	        	tileEntity.addComponent("Linked");
	        	tileEntity.addComponent("LinkedTo"+linkingElement);
	        	tileEntity.linkedTo(linkingElement);
	        	// TODO maybe his map can be decoupled into a Actionable component
	        	// for now theres only TileSpikes.
	        	if(tileEntity.has("TileSpikes")) {
	        		tileEntity.bindAction(tileEntity.disable)
	        	}
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
