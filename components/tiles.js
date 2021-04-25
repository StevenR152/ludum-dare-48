Crafty.c("TileBlue", {
	init: function() {
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, tile_blue");
  },
});

Crafty.c("TilePink", {
	init: function() {
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, tile_pink");
  },
});

Crafty.c("TileGreen", {
	init: function() {
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, tile_green");
  },
});

Crafty.c("TilePurple", {
	init: function() {
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, tile_purple");
  },
});

Crafty.c("TileSpikes", {
	init: function() {
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, tile_spikes");
  },
  // TODO to add some way for spikes to change or be updated?
});

Crafty.c("CentralHitbox", {
  init: function() {
    this.addComponent("2D, Destroyable, DOM, Hitable, Color, Collision");
    this.attr({
      w:96,
      h:48,
      x:128-48-5,
      y:128-24-70, // mummy height - half hitbox height - extra to move to feet of mummy.
      z:4000
    });
    this.checkHits("PlayerHitbox")
    this.bind("HitOn", function (hitData) {
      this._parent.trigger("PLAYER_STOOD_ON");
    })
  }
});
  
Crafty.c("Button", {
  init: function() {
    this.pressed = false;
    this.addComponent("2D, Destroyable, Collision, DOM, Color, Keyboard, button_unpressed");
    this.attach(Crafty.e("CentralHitbox"))
    this.bind("PLAYER_STOOD_ON", function () {
      if(!this.pressed) {
        this.removeComponent("button_unpressed");
        this.addComponent("button_pressed");
      } else {
        this.removeComponent("button_pressed");
        this.addComponent("button_unpressed");
      }
      this.pressed = !this.pressed;
    })
  },
});