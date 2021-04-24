Crafty.c("HudCountDisplay", {
    init : function () {
        this.requires('2D, DOM, Text')
        this.attr({w: 65, h: 100, x: 0, y: 0})
        this.z = 1000;
        this.text("0")
        this.css('text-shadow', '1px 1px 1px black')
        this.textColor('#EEE');
        this.unselectable()
        this.textFont({ size: '17px', weight: 'bold' });
    },

    setText: function (text) {
        this.text = text;
    }
});