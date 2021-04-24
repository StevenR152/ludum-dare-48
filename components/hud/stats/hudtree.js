Crafty.c("StatsHudTree", {
    init : function () {
        this.requires('2D, DOM, Text, Color');
        this.attr({w: 65, h: 100, x: 0, y: 0});
        this.z = 1000;

        var hudCurrencyImg = Crafty.e("StatsHudTreeImg");
        this.attach(hudCurrencyImg);
        hudCurrencyImg.x = this.x;
        hudCurrencyImg.y = this.y -3;
    },
});

Crafty.c("StatsHudTreeImg", {
    //the apple image icon
    init : function () {
        this.requires('2D, DOM, tree_100')
        this.attr({
            w: 25,
            h: 25,
        })
        this.z = 1000;
        this.alpha = 1;
    }
});