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

Crafty.c("LinkMechanism", {
  init: function() {
    this.linkedEntities = [];
  },

  attachLink: function (entity, callback) {
    this.linkedEntities.push([entity, callback]);
  },

  triggerLinks: function () {
    for (var i = 0; i < this.linkedEntities.length; i++) {
      var entity = this.linkedEntities[i][0];
      var callback = this.linkedEntities[i][1];
      if(typeof callback !== 'undefined') {
        callback.call(entity);
      }
    }
  }
});

Crafty.c("TileSpikes", {
	init: function() {
    this.activeDelay = null;
    this.isEnabled = true; // will spike you if true.

    this.addComponent("2D, Tile, Destroyable, DOM, Color, Delay, Keyboard, Collision, tile_spiketips");
    this.hitbox = Crafty.e("CentralHitbox");
    this.attach(this.hitbox);

    this.bind("PLAYER_STOOD_ON", function () {
      if(!this.isEnabled) {
        // if in a bad state and player stands on update images.
        this.disable();
        return;
      }
			audioController.playTrack("spikeUp", 1, 0.3);
      Crafty.trigger("PLAYER_FROZEN");
      this.announcementDelay = this.delay(function() {
        Crafty.trigger("PLAYER_STOOD_SPIKE");
      }, 350, 0, function () {
        this.announcementDelay = null;
      })

      this.triggerSpikes();
    })

    this.bind("PLAYER_STOOD_OFF", function() {
      if(!this.isEnabled) return;

      this.activeDelay = this.delay(function() {
        this.pullBackSpikes();
      }, 800, 0, function() {
        this.activeDelay = null;
      });
    });
  },

  triggerSpikes : function() {
    // Clear the Delay on reset as player stood on the button
    if(typeof this.activeDelay !== "undefined") {
      this.cancelDelay(this.activeDelay);
    }
    this.removeComponent("tile_spiketips");
    this.addComponent("tile_spikes");
  },

  pullBackSpikes : function() {
    if(!this.hitbox.hit("PlayerHitbox")) {
      this.removeComponent("tile_spikes");
      this.addComponent("tile_spiketips");
    }
  },

  toggle : function() {
    if(this.has("tile_spikeholes")) {
      this.enable();
    } else {
      this.disable();
    }
  },

  disable : function() {
    if(typeof this.activeDelay !== "undefined") {
      this.cancelDelay(this.activeDelay);
    }
    this.isEnabled = false;
    this.removeComponent("tile_spikes");
    this.removeComponent("tile_spiketips");
    this.addComponent("tile_spikeholes");

  },

  enable : function() {
    // clear any previous ones just incase.
    if(typeof this.activeDelay !== "undefined") {
      this.cancelDelay(this.activeDelay);
    }

    this.isEnabled = true;
    this.removeComponent("tile_spikes");
    this.removeComponent("tile_spikeholes");
    this.addComponent("tile_spiketips");
  }
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
    this.addComponent("2D, Tile, Destroyable, Delay, Collision, DOM, Color, Keyboard, LinkMechanism, button_unpressed");
    this.hitbox = Crafty.e("CentralHitbox");
    this.attach(this.hitbox);

    this.triggerButton = function() {
      Crafty.trigger("StepButton");
      audioController.playTrack("spikeDown", 1, 0.3);

      // Clear the Delay on reset as player stood on the button
      if(typeof this.activeDelay !== "undefined") {
        this.cancelDelay(this.activeDelay);
      }
      gtag('event', 'button_pressed', {'button_pressed': 1});
      this.removeComponent("button_unpressed");
      this.addComponent("button_pressed");

      // think actions on anything this button is linked to.
      this.triggerLinks();
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
      }, 800, 0, function() {
        this.activeDelay = null;
      });
    });

    this.bind("PLAYER_STOOD_ON", function () {
        this.triggerButton()
    })
  },
});
