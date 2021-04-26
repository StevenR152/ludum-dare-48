Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
    this.isInputFrozen = false;
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door
    this.addComponent("2D, DOM, Color, Destroyable, Collision, Keyboard, player");
    this.attr({
      posx : 1,
      posy : 5,
      w : 256,
      h : 480,
    })
    this.bind('KeyDown', function(e) {
      if(this.isInputFrozen) return;
      var direction = {};
      if(e.key == Crafty.keys.LEFT_ARROW) {
        direction = {x : -1, y : 0};
      } else if(e.key == Crafty.keys.RIGHT_ARROW) {
				direction = {x : 1, y : 0};
      } else if(e.key == Crafty.keys.UP_ARROW) {
				direction = {x : 0, y : -1};
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
				direction = {x : 0, y : 1};
      } else if(e.key == Crafty.keys.SPACE) {
        this.actionAnythingInRange();
        return;
      }
      this.undoLastMove = this.invertDirection(direction);
      Crafty.trigger("PlayerMovement", direction);
    });

    this.bind("PLAYER_STOOD_SPIKE", function () {
      Crafty.trigger("PlayerMovement", this.undoLastMove);
      this.isInputFrozen = false;
    })

    this.bind("PLAYER_FROZEN", function () {
      this.isInputFrozen = true;
    })

    this.bind('PlayerMovement', function(e) {
        var newy = this.posy+e.y-1;
        var newx = this.posx+e.x-1;

      // walked outside of map, don't allow it.
        if(newy < 0 || newx < 0 || newy >= map[current_level][0].length || newx >= map[current_level][0][newy].length) {
          return;
      }

      // stairs down
      if (map[current_level][1][newy][newx] === 8) {
        if(newy < 0 || newx <= 0 || newy >= map[current_level+1][0].length || newx >= map[current_level+1][0][newy].length) {
          this.posx += e.x;
          this.posy += e.y + 1;
        }
        else {
          this.posx += e.x + 1;
          this.posy += e.y;
        }
        Crafty.trigger("GoDownAFloor", {});
        return;
      }

      // Stairs up
      if (map[current_level][1][newy][newx] === 9) {
        // if(newy < 0 || newx <= 0 || newy >= map[current_level-1][0].length || newx >= map[current_level-1][0][newy].length) {
        //   this.posx += e.x +1 ;
        //   this.posy += e.y;
        // }
        // else {
        //   this.posx += e.x -1 ;
        //   this.posy += e.y;
        // }
        // Crafty.trigger("GoUpAFloor", {});
				Crafty.trigger("TryUpStairs", {});
        return;
      }

			if (map[current_level][1][newy][newx] === 38) {
				// you got a key
				Crafty.trigger("KeyCollected", {});
				has_key = true;
			}

			if (map[current_level][1][newy][newx] === 39) {
				// you got a scroll
				Crafty.trigger("ScrollCollected", {});
				has_scroll = true;
			}

			if (map[current_level][1][newy][newx] === 40) {
				// you got a scroll
				Crafty.trigger("FoundCat", {});
				has_cat = true;
			}

      // Pillar and other solid objects
      if (map[current_level][1][newy][newx] > 10 &&
          map[current_level][1][newy][newx] < 20) {
        return;
      }

			// Holes!
      if (map[current_level][0][newy][newx] === 0) {
        return;
      }

			// The magical sarcophagus
			if (map[current_level][1][newy][newx] === 50) {
				Crafty.trigger("FoundSarcophagus", {});
				console.log("get a cat to win");
				if (has_cat === true) {
					console.log("you win");
				}
        return;
      }

      // if we haven't returned already, we must be able to move there.
      this.posx += e.x;
      this.posy += e.y;
      isos.place(this, (this.posx), (this.posy), 1);
      return;
    });

    // ------- Hitbox under the Mummys feet ------- //
    this.hitbox = Crafty.e("2D, Color, DOM, Collision, PlayerHitbox");
    // this.hitbox.color("red");
    this.hitbox.attr({
      w:96,
      h:48,
      x:128-48-5,
      y:480-24-70, // mummy height - half hitbox height - extra to move to feet of mummy.
      z:4000
    });
    this.attach(this.hitbox)
  },

  invertDirection : function (direction) {
    return {x : -1* direction.x, y: -1 * direction.y}
  },

  actionAnythingInRange : function () {
    var hits = this.hitbox.hit("LeverHitBox");
    if(!hits) return;
    for (var i = 0; i < hits.length; i++) {
      var obj = hits[i].obj;
      Crafty.trigger("PLAYER_TRIGGERED_LEVER")
    }
  }
})
