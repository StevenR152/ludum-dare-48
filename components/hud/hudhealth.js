Crafty.c("HudHealth", {
    init : function () {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 200, h: 100, x: 0, y: 0})
        this.z = 1000;
        this.text("Tree Life:")
        this.css('text-shadow', '1px 1px 1px black')
        this.textColor('#EEE');
        this.unselectable()
        this.bind("emptyBucket", this.updateHealth);
        this.bind("treeDecayed", this.updateHealth);
        this.updateHealth()
        this.textFont({ size: '17px', weight: 'bold' });
    },

    updateHealth : function () {
        this.text("Tree Life:" + tree_health);
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    }
});
