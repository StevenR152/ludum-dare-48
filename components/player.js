Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door
        this.addComponent("2D, DOM, Color, Keyboard, player");
        this.attr({
            posx : 2,
            posy : 2,
            w : 256,
            h : 480,
          })
      this.bind('KeyDown', function(e) {
        if(e.key == Crafty.keys.LEFT_ARROW) {
					Crafty.trigger("Movement", {x : -1, y : 0});
        } else if(e.key == Crafty.keys.RIGHT_ARROW) {
					Crafty.trigger("Movement", {x : 1, y : 0});
        } else if(e.key == Crafty.keys.UP_ARROW) {
					Crafty.trigger("Movement", {x : 0, y : -1});
        } else if(e.key == Crafty.keys.DOWN_ARROW) {
					Crafty.trigger("Movement", {x : 0, y : 1});
        }
      });
    }
  })
