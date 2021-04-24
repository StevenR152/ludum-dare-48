Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = -100,
        this.alpha = 0.7;
        // this.image("assets/images/BACKGROUNDIMAGEHERE.PNG", "repeat");
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
