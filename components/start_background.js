Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, start_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
