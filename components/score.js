Crafty.c("Score", {
	init: function() {
        this.requires('2D, DOM, Text')
        this.attr({w: 200, h: 100, x: -60, y: -35})
        this.z = 1000;
        this.textAlign("center");
        this.textColor('#555');
        this.unselectable();
        this.alpha = 0.9;
        this.textFont({ size: '20px', weight: "bold" });
    }
})