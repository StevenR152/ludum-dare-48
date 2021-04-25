Crafty.c("Level", {
	init: function() {
        this.requires('2D, DOM, HUD, Text')
        this.attr({x: GAME_SCREEN_WIDTH * 0.9, y: GAME_SCREEN_HEIGHT * 0.15, w: 400, h: 100})
        this.z = 1000;
        this.textAlign("center");
        this.textColor('#542a0c');
        this.unselectable();
        this.alpha = 0.9;
        this.textFont({ size: '40px', weight: "bold" });
    }
})