Crafty.c("StatsHUD", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.z = 500;
        this.w = GAME_SCREEN_WIDTH - 15;
        this.h = 40;
        this.x = -410;
        this.y = 120;
        this.color("black");
        this.alpha = 0.15;
        this.padding = 10;

    }, 

    addText: function (parent, statistic) {
        var counterHUD = Crafty.e("HudCountDisplay");
        counterHUD.x = parent.x + this.padding + 25;
        counterHUD.y = parent.y + 2;
        counterHUD.text(statistic)
        parent.attach(counterHUD);
    },

    setUp: function (statistics) {    
        var hudWaterGroup = Crafty.e("StatsHudWaterGroup");
        hudWaterGroup.x = this.x + this.padding + 100;
        hudWaterGroup.y = this.y + this.padding;
        this.attach(hudWaterGroup);
        hudWaterGroup.fillTheBar();
        this.addText(hudWaterGroup, statistics.raindrops_collected);

        var hudCompostGroup = Crafty.e("StatsHudCompostGroup");
        hudCompostGroup.x = this.x + this.padding + 200;
        hudCompostGroup.y = this.y + this.padding;
        this.attach(hudCompostGroup);
        hudCompostGroup.fillTheBar();
        this.addText(hudCompostGroup, statistics.poos_collected);


        var hudSpeed = Crafty.e("StatsHudSpeed");
        hudSpeed.x = this.x + this.padding + 300;
        hudSpeed.y = this.y + this.padding;
        this.attach(hudSpeed);
        this.addText(hudSpeed, statistics.number_of_times_powerupSpeed);

        var hudJump = Crafty.e("StatsHudJump");
        hudJump.x = this.x + this.padding + 400;
        hudJump.y = this.y + this.padding;
        this.attach(hudJump);
        this.addText(hudJump, statistics.number_of_times_powerupJump);

        var hudRain = Crafty.e("StatsHudRain");
        hudRain.x = this.x + this.padding + 500;
        hudRain.y = this.y + this.padding;
        this.attach(hudRain);
        this.addText(hudRain, statistics.number_of_times_powerupRain);

        var hudCurrency = Crafty.e("StatsHudCurrency");
        hudCurrency.x = this.x + this.padding + 600;
        hudCurrency.y = this.y + this.padding;
        this.attach(hudCurrency);
        this.addText(hudCurrency, statistics.apples_grown);

        var hudCounter = Crafty.e("StatsHudCounter");
        hudCounter.x =  this.x + this.padding + 400;
        hudCounter.y = this.y + this.padding - 130;
        this.attach(hudCounter);
        hudCounter.totalSeconds = statistics.finish_time;
        hudCounter.updateTimer()

        var hudTree = Crafty.e("StatsHudTree");
        hudTree.x = this.x + this.padding + 700;
        hudTree.y = this.y + this.padding;
        this.attach(hudTree);
        this.addText(hudTree, statistics.number_of_times_fed_tree);
    }
})
