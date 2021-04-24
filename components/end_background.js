Crafty.c("EndBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
