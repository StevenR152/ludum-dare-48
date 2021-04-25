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
		
		var chest = Crafty.e("Chest");
		isos.place(chest, player.posx+1, player.posy+1, 1);


		player.lightSource = Crafty.e('2D, Canvas, LightSource').LightSource(player, 64, '128,128,128', true);

	    player.attach(player.lightSource)
	    
	    player.bind("EnterFrame", function (frameObj) {
			if (player.lightSource) {
				player.lightSource.attr({ x: player.x - player.lightSource.radius + player.w / 2, y: player.y - player.lightSource.radius + 7 * player.h / 8, z: player.z - 20 });
			}
		});

	    player.bind("EnterFrame", function () {
	    	if (screenComponentsGame.needRedrawDarkness) {
				// darkness for the world
				var lights = Crafty('LightSource');
				var ctxDark = screenComponentsGame.darkscreen.getContext('2d');
				ctxDark.globalCompositeOperation = "source-over";
				ctxDark.clearRect(0, 0, screenComponentsGame.darkscreen.width, screenComponentsGame.darkscreen.height);
				ctxDark.fillStyle = 'rgba(64,64,64,' + screenComponentsGame.darknessLevel + ')';
				ctxDark.fillRect(0, 0, screenComponentsGame.darkscreen.width, screenComponentsGame.darkscreen.height);
				for (var i=0;i<lights.length;i++) {
					var light = Crafty(lights[i]);
					ctxDark.globalCompositeOperation = 'destination-out';
					var x = light.x;
					var y = light.y;
					var radgrad = ctxDark.createRadialGradient(x + light.radius, y + light.radius, light.radius/8, x + light.radius, y + light.radius, light.radius);
					radgrad.addColorStop(0, 'rgba(0,0,0,1)');
					radgrad.addColorStop(1, 'rgba(0,0,0,0)');
					ctxDark.fillStyle = radgrad;
					ctxDark.beginPath();
					ctxDark.arc(x + light.radius, y + light.radius, light.radius, 0, Math.PI*2, false);
					ctxDark.closePath();
					ctxDark.fill();
				}

				screenComponentsGame.needRedrawDarkness = false;
			}
	    })
			

		isos.place(player, player.posx, player.posy, 1);

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
