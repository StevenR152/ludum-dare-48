Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.w = 300;
        this.h = 300;
        this.z = -100000,
        this.alpha = 0.1;
        this.image("assets/images/backdrop_pattern.png", "repeat");
    },
    place: function (x,y,w,h) {
        // Add the width, height, and top left co-ordinates for the box/background
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        // var foreground = Crafty.e("Foreground").place(x,y,w,h);
        return this;
    },
});
