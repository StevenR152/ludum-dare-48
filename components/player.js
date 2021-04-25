Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door
    this.addComponent("2D, DOM, Color, Collision, Keyboard, SpriteAnimation, player");
    this.reel("walking_down", 1000, [
      [0, 0], [1, 0], [2, 0], [3, 0],[4, 0], [5, 0], [6, 0],[7, 0], [8, 0], [9, 0],  [10, 0], [11, 0], [12, 0], [13, 0],[14, 0], [15, 0], [16, 0],[17, 0], [18, 0], [19, 0]
    ]);

    this.reel("walking_up", 1000, [
      [20, 0], [21, 0], [22, 0], [23, 0],[24, 0],[25, 0], [26, 0],[27, 0], [28, 0], [29, 0],  [30, 0], [31, 0], [32, 0], [33, 0],[34, 0], [35, 0], [36, 0],[37, 0], [38, 0], [39, 0]
    ]);

    this.attr({
      posx : 1,
      posy : 5,
      w : 256,
      h : 480,
    })
    this.bind('KeyDown', function(e) {
      if(e.key == Crafty.keys.LEFT_ARROW) {
				Crafty.trigger("PlayerMovement", {x : -1, y : 0});
      } else if(e.key == Crafty.keys.RIGHT_ARROW) {
				Crafty.trigger("PlayerMovement", {x : 1, y : 0});
      } else if(e.key == Crafty.keys.UP_ARROW) {
        this.animate("walking_up", -1);
				Crafty.trigger("PlayerMovement", {x : 0, y : -1});
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
        this.animate("walking_down", -1);
				Crafty.trigger("PlayerMovement", {x : 0, y : 1});
      }
    });
    this.bind('KeyUp', function(e) {
      if(e.key == Crafty.keys.LEFT_ARROW) {
				Crafty.trigger("PlayerMovement", {x : -1, y : 0});
      } else if(e.key == Crafty.keys.RIGHT_ARROW) {
				Crafty.trigger("PlayerMovement", {x : 1, y : 0});
      } else if(e.key == Crafty.keys.UP_ARROW) {
       // this.pauseAnimation()
				Crafty.trigger("PlayerMovement", {x : 0, y : -1});
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
        //this.pauseAnimation()
				Crafty.trigger("PlayerMovement", {x : 0, y : 1});
      }
    });
    
    
    // ------- Hitbox under the Mummys feet ------- //
    this.hitbox = Crafty.e("2D, Color, DOM, Collision, PlayerHitbox");
    this.hitbox.attr({
      w:96,
      h:48,
      x:128-48-5,
      y:480-24-70, // mummy height - half hitbox height - extra to move to feet of mummy.
      z:4000
    });
    this.attach(this.hitbox)
  },
})
