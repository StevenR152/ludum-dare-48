
Crafty.c("item_key", {
	init: function() {
    this.addComponent("2D, DOM, Color, props_key, HUD");
    this.alpha = 0.4;
  },

  setAlpha: function(value) {
    this.alpha = value;
  }
})

Crafty.c("item_cat", {
	init: function() {
    this.addComponent("2D, DOM, Color, props_cat, HUD");
    this.alpha = 0.4;
  },
  setAlpha: function(value) {
    this.alpha = value;
  }
});

Crafty.c("item_scroll", {
	init: function() {
    this.addComponent("2D, DOM, Color, props_scroll, HUD");
    this.alpha = 0.4;
  },
  setAlpha: function(value) {
    this.alpha = value;
  }
});
