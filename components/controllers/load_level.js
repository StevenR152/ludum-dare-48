Crafty.c("LoadLevel", {
	loadLevel: function(level, map) {
		Crafty("Destroyable").each(function(i) {
      		this.destroy();
		});
		for (var l = 0; l < map[level].length; l++) {
			for (var c = 0; c < map[level][l].length; c++) {
				for (var r = 0; r < map[level][l][c].length; r++) {
					this.placeGroundTile(level, l,c,r);
					this.tryPlaceWall(l,c,r);
					this.tryPlaceBoundary(map[level], l,c,r);
				}
			}
		}
		// Add two extra walls to complete the map; technically these are outside the map
		// hence the loop didn't render them
		this.tryPlaceWall(0,c,0);
		this.tryPlaceWall(0,0,r);
		// TODO These two were to place at left and right of screen to complete the wall...
		// but apparently it displays down a level, not sure why.
		// this.tryPlaceBoundary(map[level],0,c,0)
		// this.tryPlaceBoundary(map[level],0,0,r)
		var spawnpoint = {};
		if(level === 0) {
			spawnpoint = {x : 1, y : 5}; // Initial map start.
		} else {
			var levelStartStairs = Crafty("stairs_up");
			var spawnpoint = isos.px2pos(levelStartStairs.x+128, levelStartStairs.y+128);
			spawnpoint.x += 1;
		} 
		
		var player = Crafty.e('Player');
		makeCameraTrackEntity(player, 75);
		Crafty.viewport.scale(0.4);
		player.posx = spawnpoint.x, player.posy = spawnpoint.y;
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

// Lever example.
		// var lever = Crafty.e("Lever");
		// isos.place(lever, player.posx, player.posy+3, 0);
		// var tileSpikes2 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes2, player.posx+2, player.posy+1, 0);
		// lever.attachLink(tileSpikes2, tileSpikes2.toggle);

//Button example.
		// var button2 = Crafty.e("Button");
		// button2.attachLink(tileSpikes2, tileSpikes2.toggle);
		// button2.attachLink(tileSpikes4, tileSpikes4.toggle);
		// var button3 = Crafty.e("Button");
		// isos.place(button3, player.posx+1, player.posy+2, 0);
		// var tileSpikes3 = Crafty.e("TileSpikes");
		// isos.place(tileSpikes3, player.posx, player.posy+2, 0);
		// button3.attachLink(tileSpikes3, tileSpikes3.toggle);
		// button3.attachLink(tileSpikes1, tileSpikes1.toggle);
		// button3.attachLink(tileSpikes2, tileSpikes2.toggle);
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
		// objects are all 12's and randomly select which one.
		if(mapPosition === 12) {
			var index = Math.floor(Math.random()*randomBlockingObjects.length);
			tile = randomBlockingObjects[index];
		}

		var tileNumber = mapPosition;
		var linkingElement = null;
		// For composite position like 2101 split it into 21 and 01 as the 
		// tile number being 21 and the linking being 01.
		if(mapPosition > 1000) {
			tileNumber = Math.floor(mapPosition / 100)
			linkingElement = mapPosition - tileNumber*100;
			var tile = tileMap[tileNumber];
		}

		if(typeof tile !== 'undefined') {
	        // as we're grouping 2 layers into one for tiles and objects
	        // only every even number is a "real" layer of the pyramid
	        var tileEntity = Crafty.e(tile);
	        var layer = l; // assume the level we're on
	        var row = r;
	        var col = c;
	        // override if the entity is a floor tile.
	        if(tileEntity.has("Tile")) {
	        	// generate the tile on the layer below
	        	layer = 0;
	        }

	        if (layer % 2 != 0) {
	          isos.place(tileEntity,r+1,c+1,layer);
	        } else {
	          isos.place(tileEntity,r,c,layer);
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
	        		tileEntity.bindAction(tileEntity.toggle)
	        	}
	        }

		}
    },

    tryPlaceWall: function (l, c, r) {
    	var wall;
    	if(l == 0 && (c == 0 || r == 0)){
    		wall = Crafty.e("WallCenter");
	    	isos.place(wall,r,c,1);
		    wall.generateTorch();
	    } 
    },

    tryPlaceBoundary: function (levelMap, l, c, r) {
    	if(l != 0) return;

    	var size = levelMap[0].length -1;
    	// Edge of map.
    	if(r >= size) {
    		var boundaryBlock = Crafty.e("EdgeTile_Right");
    		isos.place(boundaryBlock,r,c,-1);
	    }

	    if(c >= size){
    		var boundaryBlock = Crafty.e("EdgeTile_Left");
    		isos.place(boundaryBlock,r,c,-1);
	    }

		if(c == size && r == size){
    		var boundaryBlock = Crafty.e("EdgeTile_Corner");
    		isos.place(boundaryBlock,r,c,-1);
	    }
    }
})
