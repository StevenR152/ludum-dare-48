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
    this.pressed = true;
    this.addComponent("2D, Destroyable, DOM, Color, Keyboard, Collision, tile_spikeholes");
    this.attach(Crafty.e("CentralHitbox"))
    this.bind("PLAYER_STOOD_ON", function () {
      if(!this.pressed) {
        this.removeComponent("tile_spikes");
        this.addComponent("tile_spikeholes");
      } else {
        this.removeComponent("tile_spikeholes");
        this.addComponent("tile_spikes");
      }
      this.pressed = !this.pressed;
    })
  },
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
    this.bind("HitOff", function (hitData) {
      this._parent.trigger("PLAYER_STOOD_OFF");
    })
  }
});

Crafty.c("Button", {
  init: function() {
    this.addComponent("2D, Destroyable, Delay, Collision, DOM, Color, Keyboard, button_unpressed");
    this.hitbox = Crafty.e("CentralHitbox");
    this.attach(this.hitbox);

    this.triggerButton = function() {
      // TODO Play button press sound here
      // TODO play a mechanism sound here for the trap going off?

      // Clear the Delay on reset as player stood on the button
      if(typeof this.activeDelay !== "undefined") {
        this.cancelDelay(this.activeDelay);
      }

      this.removeComponent("button_unpressed");
      this.addComponent("button_pressed");
    };

    this.releaseButton = function() {
      // Only reset button if player no longer stands on it.
      if(!this.hitbox.hit("PlayerHitbox")) {
        this.removeComponent("button_pressed");
        this.addComponent("button_unpressed");
      }
    };

    this.bind("PLAYER_STOOD_OFF", function() {
      this.activeDelay = this.delay(function() {
        this.releaseButton();
        console.log("stood off animation")
      }, 800, 1, function() {
        Crafty.log("reset button");
        this.activeDelay = null;
      });
    });

    this.bind("PLAYER_STOOD_ON", function () {
        this.triggerButton()
    })
  },
});