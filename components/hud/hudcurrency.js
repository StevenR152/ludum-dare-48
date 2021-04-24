Crafty.c("HudCurrency", {
    init : function () {
        this.requires('2D, DOM, Text, Color');
        this.attr({w: 65, h: 100, x: 0, y: 0});
        this.z = 1000;

        var hudCurrencyImg = Crafty.e("HudCurrencyImg");
        this.attach(hudCurrencyImg);
        hudCurrencyImg.x = this.x + 30;
        hudCurrencyImg.y = this.y - 3;

        var hudCurrencyText = Crafty.e("HudCurrencyText");
        this.attach(hudCurrencyText);

    },
});

Crafty.c("HudCurrencyImg", {
    //the apple image icon
    init : function () {
        this.requires('2D, DOM, currency')
        this.attr({
            w: 22,
            h: 23,
        })
        this.z = 1000;
        this.alpha = 0.9;
    }
});

Crafty.c("HudCurrencyText", {
    //the currency text
    init : function () {
        this.requires('2D, DOM, Text, Delay')
        this.attr({
            w: 100,
            h: 23,
        })
        this.text(currency);
        this.css('text-shadow', '1px 1px 1px black');
        this.textColor('#EEE');
        this.unselectable();
        this.textFont({ size: '17px', weight: 'bold'});
        this.z = 1000;
        this.delay(this.updateCurrency,100,-1);
    },
    updateCurrency : function () {
        //display currency on screen
        this.text(currency);
    },
})
