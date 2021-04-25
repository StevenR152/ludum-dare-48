Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door
    this.addComponent("2D, DOM, Color, Collision, Keyboard, player");
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
				Crafty.trigger("PlayerMovement", {x : 0, y : -1});
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
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
