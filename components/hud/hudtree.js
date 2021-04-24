Crafty.c("HudTree", {
	init: function() {
        this.addComponent("2D, DOM, Renderable, tree_100");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - 989 / 4 * 6;
        this.w = 850 / 12;
        this.h = 989 / 12;
        this.z = 1000;
        this.alpha = 0.8;
        this.bind("tree_health", function(newimage) {    
			this.removeComponent("tree_100");
			this.removeComponent("tree_80");
			this.removeComponent("tree_60");
			this.removeComponent("tree_40");
			this.removeComponent("tree_20");
			this.removeComponent("tree_0");
			this.addComponent(newimage)
			this.w = 850 / 12;
	        this.h = 989 / 12;
		})
	},
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
})
