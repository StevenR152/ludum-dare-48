Crafty.c("StatsHudWaterGroup", {
    init : function () {
        this.requires('2D, DOM, Color')
        this.attr({
            w: 250,
            h: 22,
        })
        this.z = 1000;
        this.alpha = 0;
        this.color("blue")
        this.padding = 1;
        
        this.maxNumberOfEntries = 1;
        this.hudWaters = [];

        this.waterCollectedCounter = 0;
        this.bind("getRaindrop", function() {
            this.waterCollectedCounter += 1;
            this.updateBar();
        })
        this.bind("emptyBucket", function() {
            this.waterCollectedCounter = 0;
            this.updateBar();
        })
    },

    fillTheBar: function () {
        for (var i = 0; i < this.maxNumberOfEntries; i++) {
            var hudWater = Crafty.e("StatsHudWater")
            this.attach(hudWater);
            hudWater.x = this.x + this.padding + (hudWater.w + this.padding * 17) * i;
            hudWater.y = this.y + this.padding;
            this.hudWaters.push(hudWater);
        }       
    },

    updateBar: function() {
        for (var i = 0; i < this.hudWaters.length; i++) {
            this.hudWaters[i].alpha = 0.4;
        }

        for (var i = 0; i < this.waterCollectedCounter; i++) {
            this.hudWaters[i].alpha = 1;
        }
    }
});

Crafty.c("StatsHudWater", {
    init : function () {
        this.requires('2D, DOM, raindrop')
        this.attr({
            w: 71 / 5,
            h: 98 / 5,
        })
        this.alpha = 1;
        this.z = 1000;
    },
});
