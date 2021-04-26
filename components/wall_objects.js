Crafty.c("WallTorchLeft", {
	init: function() {
		this.addComponent("2D, Tile, Destroyable, DOM, Color, walltorth_left");
	},
});

Crafty.c("WallTorchRight", {
	init: function() {
		this.addComponent("2D, Destroyable, DOM, Color, walltorch_right");
	},
});

Crafty.c("TorchPlaceable", {
	init: function() {
		
	},
  	generateTorch: function () {
// TODO torches on walls, I think this poses a problem that the torch is on the same layer as the wall.
// Maybe we should just randomly pick between 2 walls some with torches and some without?
  
  // 		if(this.has("wallright")) {
		// 	this.torch = Crafty.e("WallTorchRight");
		// } else {
		// 	this.torch = Crafty.e("WallTorchLeft");
		// }
		// this.attach(this.torch);
  		// ~25% chance
  		// var isTorchGenerated = true; // Math.random() * 4 > 3;
  		// if(!isTorchGenerated) {
  		// 	this.torch.destroy();
  		// }
  	}
})

Crafty.c("WallCenter", {
	init: function() {
    	this.addComponent("2D, TorchPlaceable, Destroyable, DOM, Color, wallcenter");
  	},
});
