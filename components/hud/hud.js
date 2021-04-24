Crafty.c("HUD", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.z = 1500;
        this.w = GAME_SCREEN_WIDTH - 15;
        this.h = 40;
        this.x = -410;
        this.y = 120;
        this.color("black");
        this.alpha = 0.05;
        this.padding = 10;

        var HudExtension = Crafty.e("HudExtension");
        HudExtension.x = this.x + this.padding + 20;
        HudExtension.y = this.y - 60;
        this.attach(HudExtension);
        
        this.bind("collectBucket", function() {
    		var hudCounter = Crafty.e("HudCounter");
            hudCounter.x = this.x + GAME_SCREEN_WIDTH - hudCounter.w;
            hudCounter.y = this.y + this.padding;
    		this.attach(hudCounter);
        });

        // var hudTreeLife = Crafty.e("HudHealth");
        // hudTreeLife.x = this.x + this.padding;
        // hudTreeLife.y = this.y + this.padding;
        // this.attach(hudTreeLife);

        var hudWaterGroup = Crafty.e("HudWaterGroup");
        hudWaterGroup.x = this.x + this.padding + 150;
        hudWaterGroup.y = this.y + this.padding;
        this.attach(hudWaterGroup);
        hudWaterGroup.fillTheBar();

        var hudCompostGroup = Crafty.e("HudCompostGroup");
        hudCompostGroup.x = this.x + this.padding + 350;
        hudCompostGroup.y = this.y + this.padding;
        this.attach(hudCompostGroup);
        hudCompostGroup.fillTheBar();

        var hudPowerupsGroup = Crafty.e("HudPowerups");
        hudPowerupsGroup.x = this.x + this.padding + 500;
        hudPowerupsGroup.y = this.y + this.padding;
        this.attach(hudPowerupsGroup);

        var hudCurrency = Crafty.e("HudCurrency");
        hudCurrency.x = this.x + this.padding + 720;
        hudCurrency.y = this.y + this.padding;
		this.attach(hudCurrency);
    },
})

Crafty.c("HudExtension", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.z = 1500;
        this.w = 100;
        this.h = 60;
        this.x = -410;
        this.y = 40;
        this.color("black");
        this.alpha = 0.05;
        this.padding = 15;
        this.tree = Crafty.e("HudTree").place(this.x + this.padding,this.y+this.padding/2)
        this.attach(this.tree)
    }
})

