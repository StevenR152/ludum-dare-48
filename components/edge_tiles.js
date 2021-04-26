
Crafty.c("EdgeTile_Left", {
	init: function() {
	    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, undergroundblock_left");
	},
});

Crafty.c("EdgeTile_Right", {
	init: function() {
	    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, undergroundblock_right");
	},
});


Crafty.c("EdgeTile_Corner", {
	init: function() {
	    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, undergroundblock_corner");
	},
});