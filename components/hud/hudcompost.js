Crafty.c("HudCompostGroup", {
    init : function () {
        this.requires('2D, DOM, Color')
        this.attr({
            w: 250,
            h: 22,
        })
        this.z = 1000;
        this.alpha = 0;
        this.color("brown")
        this.padding = 1;
        
        this.maxNumberOfEntries = 3;
        this.hudcomposts = [];

        this.compostCollectedCounter = 0;
        this.bind("getPoo", function() {
            this.compostCollectedCounter += 1;
            this.updateBar();
        })
        this.bind("emptyBucket", function() {
            this.compostCollectedCounter = 0;
            this.updateBar();
        })
    },

    fillTheBar: function () {
        for (var i = 0; i < this.maxNumberOfEntries; i++) {
            var hudcompost = Crafty.e("HudCompost")
            this.attach(hudcompost);
            hudcompost.x = this.x + this.padding + (hudcompost.w + this.padding * 17) * i;
            hudcompost.y = this.y + this.padding;
            this.hudcomposts.push(hudcompost);
        }       
    },

    updateBar: function() {
        for (var i = 0; i < this.hudcomposts.length; i++) {
            this.hudcomposts[i].alpha = 0.2;
        }

        for (var i = 0; i < this.compostCollectedCounter; i++) {
            this.hudcomposts[i].alpha = 1;
        }
    }
});

Crafty.c("HudCompost", {
    init : function () {
        this.requires('2D, DOM, poos_icon')
        this.attr({
            w: 20,
            h: 20,
        })
        this.alpha = 0.2;
        this.z = 1000;
    },
});
