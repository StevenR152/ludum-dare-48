Crafty.c("StatsHudCurrency", {
    init : function () {
        this.requires('2D, DOM, Text, Color');
        this.attr({w: 65, h: 100, x: 0, y: 0});
        this.z = 1000;

        var hudCurrencyImg = Crafty.e("StatsHudCurrencyImg");
        this.attach(hudCurrencyImg);
        hudCurrencyImg.x = this.x;
        hudCurrencyImg.y = this.y -3;
    },
});

Crafty.c("StatsHudCurrencyImg", {
    //the apple image icon
    init : function () {
        this.requires('2D, DOM, currency')
        this.attr({
            w: 22,
            h: 23,
        })
        this.z = 1000;
        this.alpha = 1;
    }
});